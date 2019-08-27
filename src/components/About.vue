<template>
    <div>
        <!-- <router-link :to='{name: "Study"}' exact event='mouseover'>Study</router-link>
        <router-link :to='{name: "Work"}' event='mouseover'>Work</router-link>
        <router-link :to='{name: "Hobby"}' event='mouseover'>Hobby</router-link> -->
        <router-link :to="{name: 'Study'}" exact event="mouseover">Study</router-link>
        <router-link :to="{name: 'Work'}" event="mouseover">Work</router-link>
        <router-link :to="{name: 'Hobby'}" event="mouseover">Hobby</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
