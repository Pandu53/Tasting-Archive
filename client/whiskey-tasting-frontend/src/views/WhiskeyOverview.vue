<template>
  <div class="container-md">
    <h1>DIESE WHISKEYS WAREN SCHON DABEI</h1>
    <div class="search-input">
      <div class="form-outline">
        <input
          v-model="searchPhrase"
          id="form1"
          class="form-control"
          @keyup.enter="searchWhiskey()"
        />
        <label class="form-label" for="form1">Suchen</label>
      </div>

      <div class="list-count">{{ whiskeyList.length }} Whiskeys</div>
    </div>
    <div class="whiskey-list-container" v-if="whiskeyList.length > 0">
      <whiskeycard
        v-for="whiskey in whiskeyList"
        :key="whiskey.id"
        :whiskey="whiskey"
      />
    </div>
  </div>
</template>

<script>
import whiskeycard from "../components/WhiskeyCard.vue";
import whsikeyAPI from "../functions/whiskeyApi.ts"

export default {
  name: "whiskey_list",
  components: {
    whiskeycard,
  },
  data: function () {
    return {
      loaded: false,
      whiskeyList: [],
      searchPhrase: "",
    };
  },
  created: function () {
    this.loadWhiskeyList();
  },
  methods: {
    loadWhiskeyList: function () {
      this.loaded = false;
        whsikeyAPI.getAllWhiskeys()
        .then((data) => {
          this.whiskeyList = data;
          this.loaded = true;
        });
    },
    searchWhiskey: function () {
      this.loaded = false;
      whsikeyAPI.searchWhiskeyByName(this.searchPhrase)
        .then((data) => {
          this.whiskeyList = data;
          this.loaded = true;
        });
    },
  },
};
</script>

<style  scoped>
input {
  background-color: rgba(14, 8, 2, 0.418);
}

.whiskey-list-container {
  height: 60vh;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(14, 8, 2, 0.616) rgba(14, 8, 2, 0.397) ;
}


</style>