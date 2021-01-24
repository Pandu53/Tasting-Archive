<template>
  <div class="home">
    <div v-if='whiskeysLastTasting.length > 0' >
      <whiskeycard
        v-for="i in 3"
        :key="whiskeysLastTasting[i].id"
        :whiskey="whiskeysLastTasting[i]"
      />
    </div>
  </div>
</template>

<script>
import whiskeycard from "../components/WhiskeyCard.vue";

export default {
  name: "Home",
  components: {
    whiskeycard,
  },
  data: function () {
    return {
      loaded: false,
      whiskeysLastTasting: [],
      tasting: {},
    };
  },
  created: function () {
    this.loadWhiskeyLastTasting();
  },
  methods: {
    loadWhiskeyLastTasting: function () {
      this.loaded = false;
      fetch(
        "http://localhost:3000/tastings/date/" + this.dateToday(Date.now()),
        {
          "Content-Type": "application/json",
        }
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.tasting = data[0];
          this.getWhiskeysForTasting(data.id);
        });
    },
    dateToday: function (date) {
      const d = new Date(date);
      let month = "" + (d.getMonth() + 1);
      let day = "" + d.getDate();
      const year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
    },
    getWhiskeysForTasting: function (tastingId) {
      fetch("http://localhost:3000/whiskeys/tasting/" + this.tasting.id, {
        "Content-Type": "application/json",
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.whiskeysLastTasting = data;
          this.loaded = true;
        });
    },
  },
};
</script>
