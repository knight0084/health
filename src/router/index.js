import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// boot
const boot = [
  {
    name: 'boot',
    path: '/',
    alias: ''
  }
];

// login
const login = [
  {
    name: 'login',
    path: '/login'
  }
];


// create an instance of vue-router
export default new Router({
  mode: 'hash',
  routes: [
    ...boot,
    ...login
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || {x: 0, y: 0};
  }
});
