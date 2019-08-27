<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <li>
          <!-- 可以添加路由激活事件类型 event='mouseover'-->
          <router-link to="/home" extra active-class='router-active'>home</router-link>
        </li>
        <li>
          <router-link :to="{path: '/document#abc'}">document</router-link>
        </li>
        <li>
          <router-link to="/about">about</router-link>
        </li>
        <li>
          <router-link to="/news">news</router-link>
        </li>
      </ul>
    </div>
    <transition name='left'>
    <!-- <router-view name="silder"></router-view> -->
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
}
</script>

<style>
#app{
  height: 4000px;
  font-size: 18px;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 170px;
}

li{
  float: left;
  list-style: none;
  margin-left: 15px;
}

.router-active{
  background-color: pink;
}

.left-enter{
  transform: translateX(100%);
}

.left-enter-active,.left-leave-active{
  transition: 1s;
}

.left-leave{
  transform: translateX(-100%);
}
</style>
