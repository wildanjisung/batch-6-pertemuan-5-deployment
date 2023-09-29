import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DefaultView from '../views/DefaultView.vue'
import SettingView from '../views/SettingView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import UserView from '../views/UserView.vue'
import UserDetailView from '../views/UserDetailView.vue'
import DefaultLayout from '../layout/DefaultLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
      },
      {
        path: '/setting',
        component: DefaultView,
        children: [
          {
            path: "",
            name: "Setting",
            component: SettingView
          },
          {
            path: "privacy",
            name: "Privacy",
            component: PrivacyView
          },
        ]
      },
      {
        path: '/user',
        component: DefaultView,
        children: [
          {
            path: "",
            name: "User",
            component: UserView
          },
          {
            path: ":id",
            name: "UserDetail",
            component: UserDetailView
          },
        ]
      },
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
