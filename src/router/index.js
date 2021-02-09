import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { store } from "../store/store.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/farm",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "farm" */ "../views/farm/Index.vue"),
    children: [
      {
        path: "login",
        name: "Login",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "login" */ "../views/farm/Login.vue"),
      },
      {
        path: "/",
        name: "Pools",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "Pools" */ "../views/farm/Pools.vue"),
        meta: {
          requiresAuth: true,
        },
        beforeEnter: (to, from, next) => {
          if (to.meta.requiresAuth) {
            if (store.getters.walletID) {
              next();
            } else {
              next({ path: "/farm/login" });
            }
          } else {
            next();
          }
        },
      },
      {
        path: "pool-approve",
        name: "PoolApprove",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "PoolApprove" */ "../views/farm/PoolApprove.vue"
          ),
        meta: {
          requiresAuth: true,
        },
        beforeEnter: (to, from, next) => {
          if (to.meta.requiresAuth) {
            if (store.getters.walletID) {
              next();
            } else {
              next({ path: "/farm/login" });
            }
          } else {
            next();
          }
        },
      },
      {
        path: "pool-deposit",
        name: "PoolDeposit",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "PoolDeposit" */ "../views/farm/PoolDeposit.vue"
          ),
        meta: {
          requiresAuth: true,
        },
        beforeEnter: (to, from, next) => {
          if (to.meta.requiresAuth) {
            if (store.getters.walletID) {
              next();
            } else {
              next({ path: "/farm/login" });
            }
          } else {
            next();
          }
        },
      },
      {
        path: "pool-unstake",
        name: "PoolUnstake",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "PoolUnstake" */ "../views/farm/PoolUnstake.vue"
          ),
        meta: {
          requiresAuth: true,
        },
        beforeEnter: (to, from, next) => {
          if (to.meta.requiresAuth) {
            if (store.getters.walletID) {
              next();
            } else {
              next({ path: "/farm/login" });
            }
          } else {
            next();
          }
        },
      },
    ],
  },
  {
    path: "/share",
    name: "Share",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "invite" */ "../views/Share.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "*",
    name: "Home",
    component: Home,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
