import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.baseURL = 'http://localhost:3000';



createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
