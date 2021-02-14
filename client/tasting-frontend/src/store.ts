import { createStore } from "vuex" 
import whsikeyAPI from "./functions/consumableApi";

const store = createStore({
   state:{
      consumableList: [],
      tatsingList: [],
   },
   mutations: {
      loadConsumablesList() {
         whsikeyAPI.getAllConsumables().then(data => {
           store.state.consumableList = data;
           console.log('alle geladen');
         });
      }
   },
   actions: {
      initial (context) {
         context.commit('loadConsumablesList');
      }
   }
})

export default store
