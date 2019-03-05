<template lang="html">
  <div class="columns is-mobile is-multiline">
    <GifCard v-for="gif in gifs" :key="gif.id" :gif="gif" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import GifCard from './GifCard.vue'

export default {
  name: 'Gifs',
  components: { GifCard },
  computed: {
    ...mapState(['gifs'])
  },
  mounted() {
    this.$store.dispatch('fetchGifs')
  }
}
</script>

<style lang="css" scoped>
</style>
