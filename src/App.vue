<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      data: {}
    }
  },
  mounted () {
    this.axios.get('/user/login').then((res) => {
      this.data = res
    })
  }
}
</script>

<style>

</style>
