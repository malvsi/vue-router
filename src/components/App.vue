<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <li>
          <!-- 可以添加路由激活事件类型 event='mouseover'-->
          <router-link to="/home" extra active-class="router-active">home</router-link>
        </li>
        <li>
          <router-link :to="{path: '/document'}">document</router-link>
        </li>
        <li>
          <router-link to="/about">about</router-link>
        </li>
        <li>
          <router-link to="/news">news</router-link>
        </li>
      </ul>
      当前导航是： {{ $route.meta.index }}
      <div>
        <input type="button" value="后退" @click="backHandle">
        <input type="button" value="后退2步" @click="goHandle">
        <input type="button" value="前进" @click="forwardHandle">
        <input type="button" value="跳到指定位置" @click="pushHandle">
        <input type="button" value="替换某个记录" @click="replaceHandle">
      </div>
    </div>
    <!-- <transition name='left'>
    <router-view></router-view>
    </transition>-->
    <transition :name="names">
      <!-- <router-view name="silder"></router-view> -->
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      names: 'left'
    }
  },
  methods: {
    //  编程式导航
    backHandle () {
      this.$router.back()
    },
    forwardHandle () {
      this.$router.forward()
    },
    goHandle () {
      this.$router.go(-2)
    },
    pushHandle () {
      this.$router.push('/about')
    },
    replaceHandle () {
      this.$router.replace('/document')
    }
  },
  watch: {
    $route (to, from) { // 判断当前导航栏在上一个导航的左还是右，来设置动画从左边进入还是从右边进入
      let nIndex = to.meta.index
      let oIndex = from.meta.index
      if (nIndex < oIndex) {
        this.names = 'left'
      } else {
        this.names = 'right'
      }
    }
  }
}
</script>

<style>
#app {
  height: 4000px;
  font-size: 18px;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 170px;
}

li {
  float: left;
  list-style: none;
  margin-left: 15px;
}

.router-active {
  background-color: pink;
}

.left-enter {
  transform: translateX(100%);
}

.left-enter-active,
.left-leave-active {
  transition: 1s;
}

.left-leave {
  transform: translateX(-100%);
}

.right-enter {
  transform: translateX(-100%);
}

.right-leave {
  transform: translateX(100%);
}

.right-enter-active,
.right-leave-active {
  transition: 1s;
}
</style>
