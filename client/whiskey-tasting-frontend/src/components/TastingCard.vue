<template>
  <div class="tasting-card">
    <table width="100%">
      <tr>
       <td>Das {{tasting.id}}te Tasting am:</td>
       <th> {{tasting.date}}.</th>
      </tr>
    </table>
  </div>
</template>


<script>
export default {
  name: "tastingcard",
  props: ["tasting"],
};
</script>

<style lang="">
    
</style>