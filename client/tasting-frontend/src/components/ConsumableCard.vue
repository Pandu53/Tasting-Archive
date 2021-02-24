<template>
  <div class="consumable-card col-xl-3 mr-1 ml-1 ">
    <h4>{{consumable.name}}</h4>
    <table class="consumable-data-table" width="100%">
      <tr>
        <th><h5>RATING</h5></th>
        <th><h5>DATEN</h5></th>
      </tr>
      <tr>
        <td>
        <table>
          <tr><th>Total: </th><td>{{consumable.total_rating}}</td></tr>
          <tr><th>Geschmack: </th><td>{{consumable.taste_rating}}</td></tr>
          <tr><th>Praesentation: </th><td>{{consumable.presentation_rating}}</td></tr>
        </table>
        </td><!--Ratin-->
        <td>
        <table>
          <tr><th>Alter: </th><td>{{consumable.age}}</td></tr>
          <tr><th>Vol.%: </th><td>{{consumable.vol}}%</td></tr>
          <tr><th>Hersteller: </th><td>{{consumable.presentation_rating}}</td></tr>
        </table>
        </td><!--Daten-->
      </tr>
    </table>
  </div>
</template>


<script>
export default {
  name: "consumablecard",
  props: ["consumable"],
};
</script>

<style scoped>

  .consumable-card {
    margin-top: 30px;
    padding: 10px 0 0;
    border-style: solid;
    border-width: 2px 0;
    border-color: rgba(255, 235, 205, 0.288);
    background-color: rgba(15, 5, 1, 0.493);
    height: 250px;
  }
  .consumable-data-table {
    position: absolute;
    bottom: 0;
    width: 100%;
  }


  h5 {
  border-bottom: rgba(255, 235, 205, 0.178);
  border-style: solid;
  border-width: 0 0 1px;
  text-align: center;
  }

  h4  {
    color:rgb(240, 159, 94)
  }
  
  h4 {
    text-shadow: 0 5px 10px rgba(0, 0, 0, 0.411);
  }

  table {
  text-align: left;
    }
  
  table tr td  table tr td, table tr td  table tr th {
    padding: 0 5px;
  }


</style>