<template>
  <div class="consumable-card col-xl-3 mr-1 ml-1 ">
    <h3>{{consumable.name}}</h3>
    <table width="100%">
      <tr>
        <td>
          <h4>Rating</h4>
          <table>
            <tr>
              <th>Total: </th>
              <td>{{ consumable.total_rating }}</td>
            </tr>
            <tr>
              <th>Geschmack: </th>
              <td>{{ consumable.taste_rating }}</td>
            </tr>
            <tr>
              <th>Präsentation: </th>
              <td>{{ consumable.presentation_rating }}</td>
            </tr>
          </table>
        </td>
        <td>
          <h4>Daten</h4>
          <table>
            <tr>
              <th>Alter: </th>
              <td>{{ consumable.age}}</td>
            </tr>
            <tr>
              <th>Vol%: </th>
              <td>{{ consumable.vol}} Vol.%</td>
            </tr>
            <tr>
              <th>Hersteller: </th>
              <td></td>
            </tr>
          </table>
        </td>
        <td></td>
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
    padding: 0 20px;
    border-style: solid;
    border-width: 2px 0;
    border-color: rgba(255, 235, 205, 0.288);
    background-color: rgba(15, 5, 1, 0.493);
  }

  h4 {
  border-bottom: rgba(255, 235, 205, 0.178);
  border-style: solid;
  border-width: 0 0 1px;
  }

  h3  {
    color:rgb(240, 159, 94)
  }
  
  h4 {
    text-shadow: 0 5px 10px rgba(0, 0, 0, 0.411);
  }

  td h4 {
  text-align: left;
    }


</style>