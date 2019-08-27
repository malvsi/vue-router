<template>
  <div>
    <h1>News</h1>
    <ul>
      <router-link
        style="padding: 0 10px;"
        v-for="item in newslist"
        :key="item.name"
        :to="'/news/' + item.tip + '/' + item.id"
      >{{item.name}}</router-link>
    </ul>

    <div class="userInfo" v-if="userInfo.id">
      <p>姓名：{{ userInfo.name }}</p>
      <p>Id: {{ userInfo.id }}</p>
      <p>会员类型: {{ userInfo.tip }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newslist: [
        { name: 'li', id: '1', tip: 'common' },
        { name: 'jun', id: '2', tip: 'vip' },
        { name: 'jian', id: '3', tip: 'svip' }
      ],
      userInfo: {}
    }
  },
  methods: {
    getRoute () {
      let id = this.$route.params.id
      if (id) {
        this.userInfo = this.newslist.find(item => item.id === id)
      } else {
        this.userInfo = {}
      }
    }
  },
  created () {
    this.getRoute()
  },
  watch: {
    $route () {
      this.getRoute()
    }
  }
}
</script>

<style>
</style>
