<template>
  <div class="container-md">
    <h1>Vergangene Tastings</h1>
    <div class="search-input">
      <div class="form-outline">
        <div class="input-group row justify-content-center">
          <span class="input-group-text col-5 search-lable">Datum (yyyy-mm-dd)</span>
          <input type="date"  aria-label="Jahr" class="form-control col-4" placeholder="1999" v-model="searchDate" @keypress.enter="searchTasting()"/>
        </div>
      </div>
      <div class="list-count">{{ tastingList.length }} Tastings</div>
    </div>
    <div class="tasting-list-container" v-if="tastingList.length > 0">
      <tastingcard
        v-for="tasting in tastingList"
        :key="tasting.id"
        :tasting="tasting"
      />
    </div>
  </div>
</template>

<script>
import tastingcard from "../components/TastingCard.vue";
import tastingAPI from "../functions/tastingApi.ts";

export default {
  name: "tasting_list",
  components: {
    tastingcard,
  },
  data: function () {
    return {
      loaded: false,
      tastingList: [],
      searchDate: "",
    };
  },
  created: function () {
    this.loadTastingList();
  },
  methods: {
    loadTastingList: function () {
      this.loaded = false;
      tastingAPI.getAllTastings().then((data) => {
        this.tastingList = data;
        this.loaded = true;
      });
    },
    searchTasting: function () {
      this.loaded = false;
      tastingAPI.getTastingByDate(this.searchDate).then((data) => {
        this.tastingList = data;
        this.loaded = true;
      });
    },
  },
};
</script>

<style  scoped>

.search-lable{
  text-align: center;
  background-color: rgba(14, 8, 2, 0.418) ;
  border: 1px solid rgba(255, 255, 255, 0.164);
  color: white;
}

input {
  background-color: rgba(14, 8, 2, 0.418);
}

.tasting-list-container {
  margin-top: 20px;
  height: 60vh;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: rgba(14, 8, 2, 0.616) rgba(14, 8, 2, 0.397);
}
</style>