<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage'
export default {
  name: 'App',
  mounted () {
    console.log(storage.getStorage())
  }
}
</script>

<style>

</style>
