/* eslint-disable no-undef */
/* eslint-disable no-undef */
<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-full">
          <h1 class="is-size-1-tablet is-size-2-mobile">
            Los gifs más populares del momento
          </h1>
        </div>
      </div>
      <div class="columns is-multiline">
        <div
          v-for="gif in gifs" 
          :key="gif.id"
          class="column is-4-tablet is-8-mobile is-offset-2-mobile"
        >
          <GifCard
            :gif="gif"
            data-aos="zoom-in"
            data-aos-duration="1500"
          />
        </div>
      </div>
    </div>
    <!-- <Pagination v-if="next" page="gifs" :next-gifs="next" /> -->
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
