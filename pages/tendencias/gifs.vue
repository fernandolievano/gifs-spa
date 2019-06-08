<template>
  <section class="section">
    <article class="container">
      <div class="columns is-multiline">
        <div class="column is-full">
          <h1 class="is-size-1-tablet is-size-2-mobile">
            Los gifs más populares del momento
          </h1>
        </div>
      </div>
      <div class="masonry-container">
        <div
          v-for="gif in gifs" 
          :key="gif.id"
          class="item"
        >
          <GifCard
            :gif="gif"
          />
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  head() {
    return {
      title: 'Gifs del momento - Geefs'
    }
  },
  computed: {
    ...mapState(['gifs', 'next'])
  },
  async created() {
    this.$toast.show('Cargando contenido...')
    await this.fetch(15)
    this.$toast.clear()
  },
  methods: {
    ...mapActions({
      fetch: 'fetchGifs'
    })
  }
}
</script>
