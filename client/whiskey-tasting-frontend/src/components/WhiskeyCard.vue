<template>
  <div class="whiskey-card">
    <h3>{{whiskey.name}}</h3>
    <table width="100%">
      <tr>
        <td>
          <h4>Rating</h4>
          <table>
            <tr>
              <th>Total: </th>
              <td>{{ whiskey.total_rating }}</td>
            </tr>
            <tr>
              <th>Geschmack: </th>
              <td>{{ whiskey.taste_rating }}</td>
            </tr>
            <tr>
              <th>Präsentation: </th>
              <td>{{ whiskey.presentation_rating }}</td>
            </tr>
          </table>
        </td>
        <td>
          <h4>Daten</h4>
          <table>
            <tr>
              <th>Alter: </th>
              <td>{{ whiskey.age}}</td>
            </tr>
            <tr>
              <th>Vol%: </th>
              <td>{{ whiskey.vol}} Vol.%</td>
            </tr>
            <tr>
              <th>Destille: </th>
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
  name: "whiskeycard",
  props: ["whiskey"],
};
</script>

<style scoped>

  .whiskey-card {
    margin-top: 30px;
    padding: 0 20px;
    border-style: solid;
    border-width: 2px 0;
    border-color: rgba(255, 235, 205, 0.288);
    background-color: rgba(15, 1, 4, 0.178);
  }

  h4 {
  border-bottom: rgba(255, 235, 205, 0.178);
  border-style: solid;
  border-width: 0 0 1px;
  }

  h3 , h4 {
    color:rgb(240, 159, 94)
  }
  
  h4 {
    text-shadow: 0 5px 10px rgba(0, 0, 0, 0.411);
  }

  td h4 {
  text-align: left;
    }


</style>