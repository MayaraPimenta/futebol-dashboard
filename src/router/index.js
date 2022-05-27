import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Orders from '../views/Orders.vue';
import Users from '../views/Users.vue';
import Menu from '../views/Menu.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: Orders,
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: Users,
  },
  {
    path: '/cardapio',
    name: 'cardapio',
    component: Menu,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
