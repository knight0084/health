import Vue from 'vue';
import Router from 'vue-router';
import routeRole from '../configs/route-role';
import authRoute from '../libs/auth-route';
import {sessionStorage} from '../utils';
import {LoadingBar, Notice} from 'iview';
import Home from '../views/home';

Vue.use(Router);

// home
const home = {
  name: 'home',
  path: '/home',
  alias: '',
  component: Home,
  meta: {notLayout: true}
};

// family-doctor
const familyDoctor = {
  path: '/family-doctor',
  component: () => import(/* webpackChunkName: 'family-doctor' */ '../views/family-doctor'),
  children: [
    {
      name: 'family-doctor',
      path: '',
      component: () => import(/* webpackChunkName: 'family-doctor' */ '../views/family-doctor/contract'),
      meta: {highlight: 'family-doctor-contract'}
    },
    {
      name: 'family-doctor-contract',
      path: 'contract',
      component: () => import(/* webpackChunkName: 'family-doctor' */ '../views/family-doctor/contract')
    },
    {
      name: 'family-doctor-statement',
      path: 'statement',
      component: () => import(/* webpackChunkName: 'family-doctor' */ '../views/family-doctor/statement')
    }
  ]
};

// transfer-treatment
const transferTreatment = {
  path: '/transfer-treatment',
  component: () => import(/* webpackChunkName: 'transfer-treatment' */ '../views/transfer-treatment'),
  children: [
    {
      name: 'transfer-treatment',
      path: '',
      component: () => import(/* webpackChunkName: 'transfer-treatment' */ '../views/transfer-treatment/coordination'),
      meta: {highlight: 'transfer-treatment-coordination'}
    },
    {
      name: 'transfer-treatment-coordination',
      path: 'coordination',
      component: () => import(/* webpackChunkName: 'transfer-treatment' */ '../views/transfer-treatment/coordination')
    },
    {
      name: 'transfer-treatment-statement',
      path: 'statement',
      component: () => import(/* webpackChunkName: 'transfer-treatment' */ '../views/transfer-treatment/statement')
    }
  ]
};

// news-info
const newsInfo = {
  name: 'news-info',
  path: '/news-info',
  component: () => import(/* webpackChunkName: 'news-info' */ '../views/news-info')
};

// health-pedia
const healthPedia = {
  name: 'health-pedia',
  path: '/health-pedia',
  component: () => import(/* webpackChunkName: 'health-pedia' */ '../views/health-pedia')
};


// create an instance of vue-router
const router = new Router({
  mode: 'hash',
  routes: [
    home,
    familyDoctor,
    transferTreatment,
    newsInfo,
    healthPedia
  ],
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || {x: 0, y: 0};

  }
});

// before each
router.beforeEach((to, from, next) => {
  LoadingBar.start();

  // all routes
  const allRoutes = routeRole['all'].routes;

  if (!allRoutes.includes(to.name)) {
    Notice.error({
      title: '网址错误',
      desc: '网址错误，请查证后重试'
    });

    LoadingBar.error();

    return;
  }

  // profile
  const profile = sessionStorage.get('profile');
  // has permission of specified route name
  const hasPermission = authRoute(profile ? profile.role : '', to.name);

  if (!hasPermission) {
    Notice.error({
      title: '没有权限',
      desc: '没有权限，请登录后访问'
    });

    LoadingBar.error();

    return;
  }

  next();

});

// after each
router.afterEach((to, from) => {
  LoadingBar.finish();

});

export default router;
