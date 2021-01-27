
<template>
  <div class="header-bar row">
    <div class="col-sm-8"></div>
    <div class="col-sm-3">
        <div class="row" v-if="userIsLoggedIn">Feiner Geist: {{username}}  <button type="button" class="btn btn-outline-dark" @click="logout()">Logout</button></div>
        
      <div class="row" v-if="!userIsLoggedIn">
        <div class="col">
          <input type="text" class="form-control" placeholder="Benutzer" v-model="username"/>
        </div>
        <div class="col">
          <input type="password" class="form-control" placeholder="Passwort" v-model="password" @keyup.enter="sendLogin()"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header-bar",
  data: function () {
    return {
      username: "",
      password: "",
      userIsLoggedIn: false,
    };
  },
  methods:{
      login: function(){
          //sending request

          //getting response
          //success : save data to local storage
          //failure : some notification
      },
  }
};
</script>

<style scoped>

.header-bar {
    margin: 0;
}

.header-bar input {
    background-color: rgba(0, 0, 0, 0.205);
    border-width:  0 0 1px;
    border-style: solid;
    border-radius: 0;
    border-color: blanchedalmond;
}

.header-bar button {
    margin: 0.1rem 20px;
    padding: 0px;
    height: 1.5rem;
}

</style>