<template>
  <section class="section">
    <article class="container">
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
          <p><b>Geefs</b> es tu lugar ideal para ver y buscar los mejores gifs para compartirlos con tus amigos en tus redes sociales <i class="far fa-smile-wink" /></p>
        </div>
        <div class="column is-full">
          <!-- <h1 class="encabezado">
            Tendencias 
          </h1> -->
        </div>
      </div>
      <div class="columns is-multiline is-centered">
        <!-- <div v-for="gif in gifs" :key="gif.id" class="column is-4">
          <GifCard
            data-aos="fade-up"
            data-aos-duration="1500"
            :gif="gif"
          />
        </div>
        <div class="column is-full">
          <n-link
            to="/tendencias/gifs"
            class="button is-fullwidth"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Ver más...
          </n-link>
        </div> -->
      </div>
      <div v-if="response !== null" class="column is-full">
        <ErrorKey :error="hasErrorKey" />
      </div>
    </article>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Gifs',
  data() {
    return {
      showTrendingGifs: false
    }
  },
  head() {
    return {
      title: 'Los mejores gifs para vos - Geefs'
    }
  },
  computed: {
    ...mapState(['gifs', 'response']),
    hasErrorKey() {
      return this.response.error === 'invalid key'
    }
  },
  async mounted() {
    this.$toast.show('Cargando contenido...')
    await this.fetchGifs(12)
    this.$toast.clear()
  },
  methods: {
    ...mapActions(['fetchGifs'])
  }
}
</script>

<style media="screen">
button {
  transition: all 0.2s linear;
}
</style>
