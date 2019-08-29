import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Document from '@/components/Document'
import About from '@/components/About'
import Study from '@/components/subComponents/Study'
import Work from '@/components/subComponents/Work'
import Hobby from '@/components/subComponents/Hobby'
// import Error from '@/components/Error'
import Silder from '@/components/Silder'
import News from '@/components/News'
import Login from '@/components/Login'

Vue.use(VueRouter)

/* 路由路径错误的两种处理方式
    1: 重定向到特定页面 {path: '*', redirect: '/home'}
    2: 显示404页面 {path: '*', component: Error}
*/
let router = new VueRouter({
  linkActiveClass: 'router-active',
  mode: 'history', // 路由模式
  scrollBehavior (to, from, savePosition) { // 保存上次滚动所在的位置
    /* console.log(to) //  目标路由
    console.log(from) // 涞源路由
    console.log(savePosition) // 上一个路由停留的位置对象 */

    /* if (savePosition) {
      return savePosition
    } else {
      return {x: 0, y: 0}
    } */

    if (to.hash) { // to.hash表示锚点的位置，与routerLink的参数有关
      return {
        selector: to.hash
      }
    }
  },
  routes: [
    {path: '/', component: Home},
    { path: '/home',
      component: Home,
      meta: {
        index: 0,
        login: false,
        title: 'vue-cli home'
      } },
    {path: '/login', component: Login},
    { path: '/document',
      meta: {
        index: 1,
        title: 'vue-cli document'
      },
      components: {
        default: Document,
        silder: Silder
      }},
    {
      path: '/about',
      component: About,
      children: [
        {path: '',
          name: 'Study',
          component: Study,
          meta: {
            index: 2,
            title: 'vue-cli about'
          }}, // 默认子路由
        // { path: '/study', name: 'Study', component: Study },
        { path: '/work', name: 'Work', component: Work },
        { path: '/hobby', name: 'Hobby', component: Hobby }
      ]
    },
    { path: '/news/:tip?/:id?',
      component: News,
      // 局部钩子函数
      beforeEnter (to, from, next) {
        console.log('sss')
        next()
      },
      meta: {
        index: 3,
        title: 'vue-cli news'
      }
    }
    // {path: '*', component: Error} // 如果进入/输入错误的路径，那么会显示Error这个组建
    // {path: '*', redirect: '/home'}
  ]
})

// 全局钩子函数：导航进入之前的钩子函数
/* router.beforeEach((to, from, next) => { // 导航钩子函数，提供一个拦截器
  console.log('beforeEach..')
  if (to.meta.login) { // 如果login为true，则需要登陆才能继续浏览
    next('/login')
  } else {
    next()
  }
}) */

// 全局钩子：导航进入之后执行的钩子函数
/* router.afterEach((to, from) => { // 导航进入执行这个钩子函数
  if (to.meta.title) {
    window.document.title = to.meta.title
  } else {
    window.document.title = 'vue-cli'
  }
}) */

export default router
