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
    <router-view name="silder"></router-view>
    <router-view></router-view>
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
