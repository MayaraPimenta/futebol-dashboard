import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Voting from '../views/Voting.vue';

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
  {
    path: '/votacao',
    name: 'Votacao',
    component: Voting,
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
  // Checking if the route requires auth
  if (to.matched.some(record => record.meta.requiresAuth) && !sessionStorage.getItem('user_token')) {
    return next({ name: 'Login' });
  } else {
    return next();
  }
});

export default router;
