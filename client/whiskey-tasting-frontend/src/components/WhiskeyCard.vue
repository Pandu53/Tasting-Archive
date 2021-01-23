<template>
  <div class="whiske-card">
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

<style lang="">
    
</style>