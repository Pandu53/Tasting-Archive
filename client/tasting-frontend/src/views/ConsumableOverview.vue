<template>
  <div class="container-md">
    <h1>DIESE WHISKEYS WAREN SCHON DABEI</h1>
    <div class="search-input">
      <div class="form-outline row justify-content-center">
        <label class="input-group-text col-2 search-lable" for="form1">
          Suchen
        </label>
        <input
          v-model="searchPhrase"
          id="form1"
          class="form-control col-4"
          @keyup.enter="searchConsumable()"
        />
      </div>

      <div class="list-count">{{ consumableList.length }} Whiskeys</div>
    </div>
    <div class="consumable-list-container" v-if="consumableList.length > 0">
      <div class="row justify-content-around">
        <consumablecard
          v-for="consumable in consumableList"
          :key="consumable.id"
          :consumable="consumable"
        />
      </div>
    </div>
  </div>
</template>

<script>
import consumablecard from "../components/ConsumableCard.vue";
import whsikeyAPI from "../functions/consumableApi.ts";

export default {
  name: "consumable_list",
  components: {
    consumablecard
  },
  data: function() {
    return {
      loaded: false,
      searchPhrase: ""
    };
  },
  computed:{
    consumableList () {
      console.log(this.$store.state.consumableList);
      return this.$store.state.consumableList;
    }
  },
  methods: {
    searchConsumables: function() {
      this.loaded = false;
      whsikeyAPI.searchConsumableByName(this.searchPhrase).then(data => {
        this.consumableList = data;
        this.loaded = true;
      });
    }
  }
};
</script>

<style scoped>
.search-lable {
  text-align: center;
  background-color: rgba(14, 8, 2, 0.418);
  border: 1px solid rgba(255, 255, 255, 0.164);
  color: white;
}

input {
  background-color: rgba(14, 8, 2, 0.418);
}

.consumable-list-container {
  margin-top: 20px;
  height: 60vh;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: rgba(14, 8, 2, 0.616) rgba(14, 8, 2, 0.397);
}

@media screen and (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }
}
</style>
