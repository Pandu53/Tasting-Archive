<template>
  <div class="home container-md">
    <div class="home-description">
      <h1>TREFFEN VOLLER GEISTER</h1>
      <div class="about-text">
        <p>
          Das "Treffen voller Geister" wurde 2014 ins Leben gerufen. Seit her
          wird möglichst einmal im Jahr zu einem Tasting gerufen, bei dem jeder
          Geist ein Whiskey präsentiert und danach gemeinsam mit den anderen
          geistern verkostet. Danach wird jede Präsentation und der geschmack
          des Whiskeys bewertet. Der volle Geist mit der besten Bewertung erhält
          einen geheimen Preis.
        </p>
        <p>
          Auf dieser Seite findet ihr eine Übersicht der bereits verkosteten
          Whiskeys und falls dokumentiert die dazugehörigen Daten und
          Bewertungen.
        </p>
      </div>
    </div>
    <h2>Sieger des letzten Tastings</h2>
    <div v-if="whiskeysLastTasting.length > 0">
      <whiskeycard
        v-for="i in 3"
        :key="whiskeysLastTasting[i - 1].id"
        :whiskey="whiskeysLastTasting[i - 1]"
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


<style scoped>
 .about-text {
   margin-bottom: 40px;
 }
</style>