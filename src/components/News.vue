<template>
  <div>
    <h1>News</h1>
    <ul>
      <router-link
        style="padding: 0 10px;"
        v-for="item in newslist"
        :key="item.name"
        :to="{path: '/news/' + item.tip + '/' + item.id, query: {flow: item.flow}}"
      >{{item.name}}</router-link>
    </ul>

    <div class="userInfo" v-if="userInfo.id">
      <p>姓名：{{ userInfo.name }}</p>
      <p>Id: {{ userInfo.id }}</p>
      <p>会员类型: {{ userInfo.tip }}</p>
    </div>

    <div class="info-list" v-if="userInfo.id">
      <router-link exact :to="{path: '',query: {flow: userInfo.flow}}">他的关注</router-link>
      <router-link exact :to="{path: '',query: {share: userInfo.share}}">他的分享</router-link>
    </div>

    <div>{{ $route.query.flow||$route.query.share }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newslist: [
        { name: 'li', id: '1', tip: 'common', flow: 'true', share: '3' },
        { name: 'jun', id: '2', tip: 'vip', flow: 'false', share: '4' },
        { name: 'jian', id: '3', tip: 'svip', flow: 'true', share: '100' }
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
