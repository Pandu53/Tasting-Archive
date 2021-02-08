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
          @keyup.enter="searchWhiskey()"
        />
      </div>

      <div class="list-count">{{ whiskeyList.length }} Whiskeys</div>
    </div>
    <div class="whiskey-list-container" v-if="whiskeyList.length > 0">
      <div class="row justify-content-around">
        <whiskeycard
          v-for="whiskey in whiskeyList"
          :key="whiskey.id"
          :whiskey="whiskey"
        />
      </div>
    </div>
  </div>
</template>

<script>
import whiskeycard from "../components/WhiskeyCard.vue";
import whsikeyAPI from "../functions/whiskeyApi.ts";

export default {
  name: "whiskey_list",
  components: {
    whiskeycard
  },
  data: function() {
    return {
      loaded: false,
      whiskeyList: [],
      searchPhrase: ""
    };
  },
  created: function() {
    this.loadWhiskeyList();
  },
  methods: {
    loadWhiskeyList: function() {
      this.loaded = false;
      whsikeyAPI.getAllWhiskeys().then(data => {
        this.whiskeyList = data;
        this.loaded = true;
      });
    },
    searchWhiskey: function() {
      this.loaded = false;
      whsikeyAPI.searchWhiskeyByName(this.searchPhrase).then(data => {
        this.whiskeyList = data;
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

.whiskey-list-container {
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
