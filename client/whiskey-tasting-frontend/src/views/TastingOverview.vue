<template>
  <div class="container-md">
    <h1>Vergangene Tastings</h1>
    <div class="search-input">
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

export default {
  name: "tasting_list",
  components: {
    tastingcard 
  },
  data: function () {
    return {
      loaded : false,
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
      fetch("http://localhost:3000/tastings", {
        "Content-Type": "application/json",
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.tastingList = data;
          console.log(data);
          this.loaded = true;
        });
    },
    searchTasting: function () {
      this.loaded = false;
      fetch(
        'http://localhost:3000/tastings/date/' + this.searchDate,
        {
          "Content-Type": "application/json",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          this.tastingList = data;
          this.loaded = true;
        });
    },
  },
};
</script>

<style lang="stylus" scoped></style>