import Vue from 'vue'
import Vuex from 'vuex'

import car from './car'

Vue.use(Vuex);


const store = new Vuex.Store({
  modules: {
    'car': car
  }
});

export default store
