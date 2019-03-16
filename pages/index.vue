<template>
  <section class="container">
    <div class="columns is-centered is-vcentered is-multiline">
      <div class="column is-full">
        <h1 class="encabezado">
          Tendencias 
        </h1>
      </div>
      <div class="column is-6">
        <button class="button" @click="showTrendingGifs = true">
          <span>Trending Gifs</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>
      <div class="column is-6">
        <button class="button" @click="showTrendingStickers = true">
          <span>Trending Stickers</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>
    </div>
    <div class="columns is-multiline is-centered is-vcentered">
      <div class="column is-6-tablet">
        <Carousel v-if="showTrendingGifs" :slides="gifs" />
      </div>
      <div class="column is-6-tablet">
        <Carousel v-if="showTrendingStickers" :slides="gifs" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Gifs',
  data() {
    return {
      showTrendingGifs: false,
      showTrendingStickers: false
    }
  },
  computed: {
    ...mapState(['gifs'])
  },
  async mounted() {
    this.$toast.show('Cargando gifs...')
    await this.$store.dispatch('fetchGifs')
    this.$toast.clear()
  }
}
</script>

<style media="screen">
button {
  transition: all 0.2s linear;
}
</style>
