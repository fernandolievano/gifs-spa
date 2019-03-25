<template>
  <section class="container">
    <div class="columns is-centered is-vcentered is-multiline has-text-centered">
      <div class="column is-4-mobile is-offset-4-mobile is-4-tablet">
        <figure class="image">
          <img src="/geef.svg" alt="logo">
        </figure>
      </div>
      <div class="column is-full-mobile is-8-tablet">
        <h1 class="title">
          Geefs
        </h1>
        <p><b>Geefs</b> es tu lugar ideal para ver y buscar los mejores gifs y stickers de <a href="https://giphy.com/">Giphy</a> para compartirlos con tus amigos en tus redes sociales <i class="far fa-smile-wink" /></p>
      </div>
      <div class="column is-full">
        <h1 class="encabezado">
          Tendencias 
        </h1>
      </div>
    </div>
    <div class="columns is-multiline is-centered">
      <div class="column is-6-tablet is-10-mobile is-offset-1-mobile">
        <div class="columns is-multiline">
          <div class="column is-full">
            <button class="button is-link" :class="[showTrendingGifs ? '' : 'is-outlined']" @click="showTrendingGifs= !showTrendingGifs">
              <span>Gifs Populares</span>
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
      <div class="column is-6-tablet is-10-mobile is-offset-1-mobile">
        <div class="columns is-multiline">
          <div class="column is-full">
            <button class="button is-link" :class="[showTrendingStickers ? '' : 'is-outlined']" @click="showTrendingStickers = !showTrendingStickers">
              <span>Stickers populares</span>
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
  head() {
    return {
      title: 'Los mejores gifs y stickers para vos - Geefs'
    }
  },
  computed: {
    ...mapState(['gifs', 'stickers'])
  },
  async mounted() {
    this.$toast.show('Cargando contenido...')
    await this.$store.dispatch('fetchGifs', 12)
    await this.$store.dispatch('fetchStickers', 12)
    this.$toast.clear()
  }
}
</script>

<style media="screen">
button {
  transition: all 0.2s linear;
}
</style>
