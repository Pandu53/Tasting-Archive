<template>
<div class="main">
  <headerbar />
  <router-view />
</div>
</template>

<script>
import headerbar from './components/HeaderBar.vue';

export default {
  name:'app',
  components:{
    headerbar,
  },

}
</script>

<style>

@font-face {
  font-family: 'Zierinitialien';
  src: url('./assets/fonts/Zierinitialen1.ttf');
}

@font-face {
  font-family: 'Gudea';
  src: url('./assets/fonts/Gudea-Regular.ttf');
}

* {
    box-sizing: border-box;
}

html {
  background-color:  rgb(14, 8, 2);
  height: 100%;
}

body {
    margin: 0px;
    height: 100%;
    background-image: url('./assets/body-bg.jpg');
    background-size: cover;
    background-position: center;
}

h1 , h2 , h3 , h4 {
  font-family: Zierinitialien;
  text-shadow: 1px 2px 1px rgba(0, 0, 0);
}

#app {
  height: 100%;
  font-family: Gudea, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(253, 239, 222);
  background-image: linear-gradient( 90deg,  rgba(14, 8, 2, 0.75) 10%, rgba(19, 10, 1, 0.322)20%,rgba(19, 10, 1, 0.322)80%, rgba(14, 8, 2, 0.75)90%);
}


</style>
