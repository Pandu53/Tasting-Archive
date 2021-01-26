<template>
  <div class="tasting-card">
    <table width="100%">
      <tr class="header-row">
       <td><h4>Das {{tasting.id}}te Tasting am:</h4></td>
       <td></td>
       <td><h4>{{tasting.date}}.</h4></td>
      </tr>
      <tr v-if="tastingWhiskeys.length > 0">
        <td><div class="row"><div class="col-4">1ter Platz (Rating:{{tastingWhiskeys[0].total_rating}}): </div><div class="col-8"> {{tastingWhiskeys[0].name}}</div></div></td>
        <td><div class="row"><div class="col-4">2ter Platz (Rating:{{tastingWhiskeys[1].total_rating}}): </div><div class="col-8"> {{tastingWhiskeys[1].name}}</div></div></td>
        <td><div class="row"><div class="col-4">3ter Platz (Rating:{{tastingWhiskeys[2].total_rating}}): </div><div class="col-8"> {{tastingWhiskeys[2].name}}</div></div></td>
      </tr>
    </table>
  </div>
</template>


<script>
export default {
  name: "tastingcard",
  props: ["tasting"],
  data: function (){
    return {
      tastingWhiskeys: [],
      loaded: false
    }
  },
  created:function () {
    this.getWhiskeysForTasting();
  },
  methods:{
    getWhiskeysForTasting: function(){
            this.loaded = false;
      fetch("http://localhost:3000/whiskeys/tasting/" + this.tasting.id, {
        "Content-Type": "application/json",
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.tastingWhiskeys = data;
          console.log(data);
          this.loaded = true;
        });
    }
  }
};
</script>

<style scoped>

.tasting-card {
     margin-top: 30px;
    padding: 0 20px;
    border-style: solid;
    border-width: 2px 0;
    border-color: rgba(255, 235, 205, 0.288);
    background-color: rgba(15, 1, 4, 0.178);
}

h3 , h4 {
    color:rgb(240, 159, 94)
  }

table {
  width: 100%;
}

td {
  min-width: 33%;
}

.header-row {
  border-bottom: rgba(255, 235, 205, 0.178);
  border-style: solid;
  border-width: 0 0 1px;
}
    
</style>