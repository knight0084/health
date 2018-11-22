import Vue from 'vue';
import Vuex from 'vuex';

/* modules */
// layout
import layout from './layout';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    layout
  }
});
