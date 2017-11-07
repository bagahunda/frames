import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import frame from '@/components/frame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      props: true
    },
    {
      path: '/frame',
      name: 'frame',
      component: frame,
      props: true
    }
  ]
})
