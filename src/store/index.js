import Vue from 'vue';
import Vuex from 'vuex';
import layout from './layout';

Vue.use(Vuex);

// create store
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    layout
  }
});
