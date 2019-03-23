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
      <div class="columns">
        <div class="horizontal-scrolling">
          <div
            v-for="gif in gifs" 
            :key="gif.id"
            class="column is-4-desktop is-8-tablet is-10-mobile"
          >
<GifCard
              data-aos="fade-up"
              data-aos-duration="2000"
              :gif="gif"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['gifs'])
  },
  async mounted() {
    this.$toast.show('Cargando contenido...')
    await this.fetch(18)
    this.$toast.clear()
  },
  methods: {
    ...mapActions({
      fetch: 'fetchGifs'
    })
  }
}
</script>

<style scoped>
.horizontal-scrolling {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}
</style>
