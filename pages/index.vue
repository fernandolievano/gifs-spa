<template>
  <section class="container is-fluid">
    <div class="columns is-vcentered">
      <div class="column is-full">
        <h1 class="is-size-1">Tendencias</h1>
      </div>
    </div>
    <div class="columns">
      <div class=" horizontal-scrolling">
        <GifCard v-for="gif in gifs" :key="gif.id" :gif="gif" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import GifCard from '~/components/GifCard.vue'

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

<style media="screen">
.horizontal-scrolling {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  .column {
    flex: 0 0 auto;
  }
}
.horizontal-scrolling::-webkit-scrollbar {
  width: 5px;
}
.horizontal-scrolling::-webkit-scrollbar-track {
  background: #421b9b;
}
.horizontal-scrolling::-webkit-scrollbar-thumb {
  background: hsl(204, 86%, 53%);
  transition: 5s;
}
.horizontal-scrolling::-webkit-scrollbar-thumb:hover {
  background: #503bff;
}
</style>
