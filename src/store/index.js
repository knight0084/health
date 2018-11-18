import Vue from 'vue';
import Vuex from 'vuex';

// global
import state from './state';
import getters from './getters';
import mutations from './mutations';

// modules


Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  mutations,
  modules: {}
});
