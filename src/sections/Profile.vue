<template lang="html">
<div
  id="profile"
  class="mt-4 mx-auto content-container center-flex flex-md-nowrap flex-wrap"
>
  <img src="../assets/images/portrait.png" class="img-fluid portrait" alt="portrait">
  <b-container fluid class="my-4 mx-0 text-center">
    <h2>
      <b>{{ profile.name }}</b>
    </h2>
    <h4 class="text-muted">
      {{ profile.position }}
    </h4>
    <description :text="profile.info"></description>
  </b-container>
</div>
</template>

<script>
import { profile } from '@/data'
import Description from '@/containers/Description'

export default {
  components: { Description },
  data () {
    return { profile }
  }
}
</script>

<style scoped>
.portrait {
  max-width: 260px;
}

.info {
  font-size: 18px;
  background-color: #f7f7f7;
  border-radius: 20px;
  padding: 12px;
  margin: 0;
}
</style>
