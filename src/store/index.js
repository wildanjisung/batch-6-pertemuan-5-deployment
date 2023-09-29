import Vue from 'vue'
import Vuex from 'vuex'
import createPersitedState from "vuex-persistedstate"

import user from './user'
import home from './home'

Vue.use(Vuex)

const persitedDataState = createPersitedState({
  paths: ["user"],
});

export default new Vuex.Store({
  plugins: [persitedDataState],
  modules: {
    user: {
      namespaced: true,
      ...user
    },
    home: {
      namespaced: true,
      ...home
    },
  }
})
