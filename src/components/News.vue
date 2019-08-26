<template>
    <div>
        <h1>News</h1>
        <ul>
            <router-link style="padding: 0 10px;" v-for="item in newslist" :key='item.name' :to="'/news/new/' + item.id">{{item.name}}</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newslist: [
                {name: 'li', id: '1'},
                {name: 'jun', id: '2'},
                {name: 'jian', id: '3'}
            ]
        }
    }
}
</script>

<style>
</style>
