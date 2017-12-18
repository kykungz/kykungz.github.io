<template>
<my-section :topic="information.topic" :icon="information.icon">
  <b-container>
    <b-row>
      <b-col md>
        <b-row class="lead" v-for="(topic, i) in information.info" :key="i">
          <b-col class="text-left" cols="5">{{ topic.title }}</b-col>
          <b-col class="text-right" cols="7"><span style="white-space: pre-line">{{ topic.answer }}</span></b-col>
        </b-row>
      </b-col>
      <b-col md>
        asdf
      </b-col>
    </b-row>
  </b-container>
</my-section>
</template>

<script>
import { information } from '@/data'
import MySection from '@/containers/MySection'

export default {
  components: { MySection },
  data () {
    return { information }
  }
}
</script>

<style scoped>
</style>
