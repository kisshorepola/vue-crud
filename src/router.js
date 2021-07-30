import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/components/Home'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      name:'home',
      component:home
    }
  ]
})