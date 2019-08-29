<template>
    <div>
        <!-- <router-link :to='{name: "Study"}' exact event='mouseover'>Study</router-link>
        <router-link :to='{name: "Work"}' event='mouseover'>Work</router-link>
        <router-link :to='{name: "Hobby"}' event='mouseover'>Hobby</router-link> -->
        <router-link :to="{name: 'Study'}" exact event="mouseover">Study</router-link>
        <router-link :to="{name: 'Work'}" event="mouseover">Work</router-link>
        <router-link :to="{name: 'Hobby'}" event="mouseover">Hobby</router-link>
        {{msg}}
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '改变前'
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouterEneter')
    next((vm) => {
      console.log(vm)
      vm.msg = '改变后'
    })
  }
}
</script>

<style>
</style>
