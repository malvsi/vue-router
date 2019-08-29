# 知识点
> 路由钩子函数
``` bash
    # 1: 全局钩子函数
        router.beforeEach((to, from, next)=> {
            <!-- 拦截器 -->
        })
    # 2: 局部钩子函数
        {
            path: '/document',
            meta: {
                login: true
            },
            beforeEneter(to, from, next) {
                if(to.meta.login) {
                    next('/login')
                } else {
                    next()
                }
            },
            component: document
        }
    # 3: 组建内的钩子函数   beforeRouteUpdate和beforeRouterLeave
        beforeRouteEnter(to, from, next) {
            next( (vm)=> {
                <!-- vm表示当前Vue实例对象 -->
            })
        }
```        


# vue-cli

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
