<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="css">
#app {
  font-family: 'work sans';
}

.center-flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-container {
  max-width: 900px;
}
</style>
