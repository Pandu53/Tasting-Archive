
<template>
  <div class="header-bar row">
    <div class="col-md-8 ">
      <div id="nav" class="row justify-content-left">
        <i class="mobile-menue-icon" @click="toggleMobileMenue()"></i>
        <router-link class="menue-link col-md-3" to="/" @click="toggleMobileMenue()">Home</router-link> 
        <router-link class="menue-link col-md-3" to="/tastingList" @click="toggleMobileMenue()">Alle Tastings</router-link> 
        <router-link class="menue-link col-md-3" to="/whiskeylist" @click="toggleMobileMenue()">Alle Whiskeys</router-link>
      </div>
    </div>
    <div class="col-sm-3">
      <div class="row" v-if="userIsLoggedIn">
        Feiner Geist: {{ username }}
        <button type="button" class="btn btn-outline-dark" @click="logout()">
          Logout
        </button>
      </div>

      <div class="row login-input" v-if="!userIsLoggedIn">
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
import loginAPI from "../functions/authentification.ts";

export default {
  name: "header-bar",
  data: function () {
    return {
      username: "",
      password: "",
      token: "",
      userId: "",
      userIsLoggedIn: false,
    };
  },
  methods: {
    login: function () {
      loginAPI
        .loginRoutine({ user: this.username, password: this.password })
        .then((data) => {
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
    logout: function () {
      localStorage.removeItem("user-token");
      localStorage.removeItem("user-id");
      this.token = "";
      this.userId = "";
      this.setIsLoggedin();
    },
    setIsLoggedin: function () {
      if (localStorage.getItem("user-token")) {
        this.userIsLoggedIn = true;
      } else {
        this.userIsLoggedIn = false;
      }
    },
    toggleMobileMenue: function() {
      const menue = document.getElementById('nav');
      if(menue.style.visibility == 'hidden'){
        menue.style.visibility = 'visible';
      }else{
        menue.style.visibility = 'hidden';
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.header-bar {
  margin: 0 0 20px 0;
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

#nav {
 
  padding: 0 30px;
  font-family: Zierinitialien;
}

#nav a {
  font-weight: bold;
  color: #dd955a;
}

#nav a.router-link-exact-active {
  color: #d65933;
}

.menue-link {
  margin-top: 5px;
  padding: 0 10px;
   max-height: 1rem;
}

.menue-link:not(:last-child) {
  border-right: 1px solid #d65933;
}

 .mobile-menue-icon {
   background-image: url('../assets/icons/burgerMenue.png');
   width: 2rem;
   height: 2rem;
   background-position: center;
   background-size: cover;
   margin: 5px;
   visibility: hidden;
   cursor: pointer;
 }

@media screen and (max-width: 768px) {
  
  #nav {
    visibility: hidden;
    background-color: rgb(0, 0, 0);
    padding: 0 0 20px;
  }

  .menue-link {
  border-width: 0px;
  width: 100%;
}

 .mobile-menue-icon {
   visibility: visible;
 }

 .login-input {
   visibility: hidden;
 }

}

</style>