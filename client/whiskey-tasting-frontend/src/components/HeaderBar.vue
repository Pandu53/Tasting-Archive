
<template>
  <div class="header-bar row">
    <div class="col-sm-8"></div>
    <div class="col-sm-3">
      <div class="row" v-if="userIsLoggedIn">
        Feiner Geist: {{ username }}
        <button type="button" class="btn btn-outline-dark" @click="logout()">
          Logout
        </button>
      </div>

      <div class="row" v-if="!userIsLoggedIn">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Benutzer"
            v-model="username"
          />
        </div>
        <div class="col">
          <input
            type="password"
            class="form-control"
            placeholder="Passwort"
            v-model="password"
            @keypress.enter="login()"
          />
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
      token: "",
      userId: "",
      userIsLoggedIn: false
    };
  },
  methods: {
    login: function () {
      console.log("login :" + this.username + " " +this.password);
      fetch("http://localhost:3000/login/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },   
        body: JSON.stringify({'user':this.username,'password':this.password}),
      }).then(response => response.json())
        .then(data => {
          this.token = data.token;
          this.userId = data.userId;
          localStorage.setItem("user-token", this.token);
          localStorage.setItem("user-id", this.userId);
          this.setIsLoggedin();
        })
        .catch(function (error) {
          localStorage.removeItem("user-token");
          localStorage.removeItem("user-id");
          this.token = "";
          this.userId = "";
          this.setIsLoggedin();
        });
    },
    logout: function(){
          localStorage.removeItem("user-token");
          localStorage.removeItem("user-id");
          this.token = "";
          this.userId = "";
          this.setIsLoggedin();
    },
    setIsLoggedin: function() {
      if(localStorage.getItem('user-token')){
        this.userIsLoggedIn = true;
      }else{
        this.userIsLoggedIn = false;
      }
    }
  },
};
</script>

<style scoped>
.header-bar {
  margin: 0;
  height: 35px;
}

.header-bar input {
  background-color: rgba(0, 0, 0, 0.205);
  border-width: 0 0 1px;
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