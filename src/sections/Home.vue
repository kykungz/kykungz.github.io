<template>
  <div id="home">
    <nav-bar></nav-bar>
    <my-header></my-header>
    <profile></profile>
    <information></information>
  </div>
</template>

<script>
import NavBar from '@/sections/NavBar'
import MyHeader from '@/sections/MyHeader'
import Profile from '@/sections/Profile'
import Information from '@/sections/Information'
export default {
  components: { NavBar, MyHeader, Profile, Information }
}
</script>

<style scoped>
</style>
