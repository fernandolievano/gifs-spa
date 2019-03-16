<template>
  <section class="container">
    <div class="columns is-centered is-vcentered is-multiline">
      <div class="column is-full">
        <h1 class="encabezado">
          Tendencias 
        </h1>
      </div>
    </div>
    <div class="columns is-multiline is-centered">
      <div class="column is-6-tablet">
        <div class="columns is-multiline">
          <div class="column is-full">
            <button class="button is-link" :class="[showTrendingGifs ? '' : 'is-outlined']" @click="showTrendingGifs= !showTrendingGifs">
              <span>Trending Gifs</span>
              <span class="icon is-small">
                <i :class="[showTrendingGifs ? 'fas fa-angle-up' :'fas fa-angle-down']" aria-hidden="true" />
              </span>
            </button>
          </div>
          <div class="column is-full">
            <transition
              enter-active-class="animated fadeInUp"
              leave-active-class="animated fadeOutDown"
              mode="out-in"
            >
              <Carousel v-if="showTrendingGifs" :slides="gifs" />
            </transition>
          </div>
        </div>
      </div>
      <div class="column is-6-tablet">
        <div class="columns is-multiline">
          <div class="column is-full">
            <button class="button is-link is-outlined" :class="[showTrendingGifs ? '' : 'is-outlined']" @click="showTrendingStickers = !showTrendingStickers">
              <span>Trending Stickers</span>
              <span class="icon is-small">
                <i :class="[showTrendingStickers ? 'fas fa-angle-up' :'fas fa-angle-down']" aria-hidden="true" />
              </span>
            </button>
          </div>
          <div class="column is-full">
            <transition
              enter-active-class="animated fadeInUp"
              leave-active-class="animated fadeOutDown"
              mode="out-in"
            >
              <Carousel v-if="showTrendingStickers" :slides="stickers" />
            </transition>
          </div>
        </div>
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
    ...mapState(['gifs', 'stickers'])
  },
  async mounted() {
    this.$toast.show('Cargando contenido...')
    await this.$store.dispatch('fetchGifs')
    await this.$store.dispatch('fetchStickers')
    this.$toast.clear()
  }
}
</script>

<style media="screen">
button {
  transition: all 0.2s linear;
}
</style>
