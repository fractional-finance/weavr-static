import {createStore} from 'vuex'
import Vue from 'vue'
import state from "./state"



const store = createStore({
  modules: {
    state
  }
})

export default store
