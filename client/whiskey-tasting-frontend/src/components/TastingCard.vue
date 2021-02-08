<template>
  <div class="tasting-card">
    <table width="100%">
      <tr class="header-row">
        <div class="row">
          <div class="col-sm-6">
            <h4>Das {{ tasting.id }}te Tasting am:</h4>
          </div>
          <div  class="col-sm-6">
            <h4>{{ tasting.date }}.</h4>
          </div>
        </div>
      </tr>
      <tr v-if="tastingWhiskeys.length > 0">
        <div class="row">
          <div class="col-lg-4">
            <div class="row">
              <div class="col-4">
                <div class="fat">
                  1ter Platz (Rating:{{ tastingWhiskeys[0].total_rating }}):
                </div>
              </div>
              <div class="col-8">{{ tastingWhiskeys[0].name }}</div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="row">
              <div class="col-4">
                <div class="fat">
                  2ter Platz (Rating:{{ tastingWhiskeys[1].total_rating }}):
                </div>
              </div>
              <div class="col-8">{{ tastingWhiskeys[1].name }}</div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="row">
              <div class="col-4">
                <div class="fat">
                  3ter Platz (Rating:{{ tastingWhiskeys[2].total_rating }}):
                </div>
              </div>
              <div class="col-8">{{ tastingWhiskeys[2].name }}</div>
            </div>
          </div>
        </div>
      </tr>
    </table>
  </div>
</template>


<script>
import whsikeyAPI from "../functions/whiskeyApi.ts";

export default {
  name: "tastingcard",
  props: ["tasting"],
  data: function () {
    return {
      tastingWhiskeys: [],
      loaded: false,
    };
  },
  created: function () {
    this.getWhiskeysForTasting();
  },
  methods: {
    getWhiskeysForTasting: function () {
      this.loaded = false;
      whsikeyAPI.getWhiskeyByTastingId(this.tasting.id)
        .then((data) => {
          this.tastingWhiskeys = data;
          this.loaded = true;
        });
    },
  },
};
</script>

<style scoped>
.tasting-card {
  margin-top: 30px;
  padding: 0 20px;
  border-style: solid;
  border-width: 2px 0;
  border-color: rgba(255, 235, 205, 0.288);
  background-color: rgba(15, 1, 4, 0.5);
}

h3,
h4 {
  color: rgb(240, 159, 94);
}

table {
  width: 100%;
}

.header-row {
  border-bottom: rgba(255, 235, 205, 0.178);
  border-style: solid;
  border-width: 0 0 1px;
}


.fat {
  font-weight: bolder;
}
</style>