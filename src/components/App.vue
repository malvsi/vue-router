<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <li>
          <!-- 可以添加路由激活事件类型 event='mouseover'-->
          <router-link :to="index" extra active-class='router-active' event='mouseover'>home</router-link>
        </li>
        <li>
          <router-link :to="document" event='mouseover'>document</router-link>
        </li>
        <li>
          <router-link :to="about" event='mouseover'>about</router-link>
        </li>
      </ul>
    </div>
    <router-view class="center"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      index: '/home',
      document: '/document',
      about: '/about'
    }
  }
}
</script>

<style>
#app{
  font-size: 18px;
}

li{
  float: left;
  list-style: none;
  margin-left: 15px;
}

.router-active{
  background-color: pink;
}
</style>
