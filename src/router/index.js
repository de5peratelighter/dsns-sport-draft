import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/MainView.vue')
    },
    // {
    //   path: '/admin',
    //   name: 'admin',
    //   component: () => import('../views/AdminView.vue'),
    // },
    {
      path: '/selectCompetition',
      name: 'selectCompetition',
      component: () => import('../views/CompetitionSelectView.vue'),
    },
    {
      path: '/editCompetition/:id',
      name: 'editCompetition',
      component: () => import('../views/CompetitionEditView.vue'),
    },
    {
      path: '/configByType/:id',
      name: 'configByType',
      component: () => import('../views/ConfigByTypeView.vue'),
    },
    {
      path: '/configJudges/:id',
      name: 'configJudges',
      component: () => import('../views/ConfigJudges.vue'),
    },
    {
      path: '/configMain/:id',
      name: 'configMain',
      component: () => import('../views/ConfigMain.vue'),
    },
    {
      path: '/configLogos/:id',
      name: 'configLogos',
      component: () => import('../views/ConfigLogos.vue'),
    },
  ]
})

export default router
