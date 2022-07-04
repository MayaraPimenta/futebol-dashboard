import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import store from '@/store/modules/auth';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuth: false,
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  let redirectPath = null;
  const redirectQuery = {};

  redirectQuery.redirect = to.fullPath;
  // Checking if the route requires auth
  if (to.matched.some(record => record.meta.requiresAuth) && !store.state.authenticated) {
    return next({ name: 'Login' });
  } else if (redirectPath) {
    return next({
      path: to.fullPath,
      query: redirectQuery
    });
  }
  next();
});

export default router;
