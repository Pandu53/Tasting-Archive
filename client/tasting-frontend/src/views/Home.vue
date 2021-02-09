<template>
  <div class="home container-md">
    <div class="home-description">
      <h1>TREFFEN VOLLER GEISTER</h1>
      <div class="about-text">
        <p>
          Das "Treffen voller Geister" wurde 2014 ins Leben gerufen. Seit her
          wird möglichst einmal im Jahr zu einem Tasting gerufen, bei dem jeder
          Geist ein Whiskey präsentiert und danach gemeinsam mit den anderen
          Geistern verkostet. Danach wird jede Präsentation und der Geschmack
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
    <div class="row justify-content-around" v-if="consumablesLastTasting.length > 0" >
      <consumablecard
        v-for="i in 3"
        :key="consumablesLastTasting[i - 1].id"
        :consumable="consumablesLastTasting[i - 1]"
      />
    </div>
  </div>
</template>

<script>
import consumablecard from "../components/ConsumableCard.vue";
import tastingAPI from "../functions/tastingApi.ts";
import consumableAPI from "../functions/consumableApi.ts";

export default {
  name: "Home",
  components: {
    consumablecard,
  },
  data: function () {
    return {
      loaded: false,
      consumablesLastTasting: [],
      tasting: {},
    };
  },
  created: function () {
    this.loadConsumableLastTasting();
  },
  methods: {
    loadConsumableLastTasting: function () {
      this.loaded = false;
      tastingAPI.getTastingByDate(this.dateToday(new Date()))
        .then((data) => {
          this.tasting = data[0];
          this.getConsumablesForTasting(this.tasting.id);
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
    getConsumablesForTasting: function (tastingId) {
      consumableAPI.getConsumableByTastingId(tastingId)
        .then((data) => {
          this.consumablesLastTasting = data;
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