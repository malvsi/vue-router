import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Document from '@/components/Document'
import About from '@/components/About'
import Study from '@/components/subComponents/Study'
import Work from '@/components/subComponents/Work'
import Hobby from '@/components/subComponents/Hobby'
import Error from '@/components/Error'

Vue.use(VueRouter)

/* 路由路径错误的两种处理方式
    1: 重定向到特定页面 {path: '*', redirect: '/home'}
    2: 显示404页面 {path: '*', component: Error}
*/
let router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/home', component: Home },
    { path: '/document', component: Document },
    {
      path: '/about',
      component: About,
      children: [
        { path: '/about/study', component: Study },
        { path: '/about/work', component: Work },
        { path: '/about/hobby', component: Hobby }
      ]
    },
    {path: '*', component: Error} // 如果进入/输入错误的路径，那么会显示Error这个组建
    // {path: '*', redirect: '/home'}
  ],
  linkActiveClass: 'router-active'
})

export default router
