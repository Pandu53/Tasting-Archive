<template>
  <div>
    <h1>DIESE WHISKEYS WAREN SCHON DABEI</h1>
    <div class="search-input">
      <div class="form-outline">
        <input
          v-model="searchPhrase"
          id="form1"
          class="form-control"
          @keyup.enter="searchWhiskey()"
        />
        <label class="form-label" for="form1">Example label</label>
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
      fetch("http://localhost:3000/whiskeys", {
        "Content-Type": "application/json",
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.whiskeyList = data;
          this.loaded = true;
        });
    },
    searchWhiskey: function () {
      this.loaded = false;
      fetch(
        'http://localhost:3000/whiskeys/search/' + this.searchPhrase,
        {
          "Content-Type": "application/json",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          this.whiskeyList = data;
          this.loaded = true;
        });
    },
  },
};
</script>

<style lang="stylus" scoped></style>