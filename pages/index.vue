<template>
  <section class="container">
    <div class="columns is-vcentered">
      <div class="column is-full">
        <h1 class="encabezado">
          Tendencias
        </h1>
      </div>
    </div>
    <div class="columns is-multiline is-vcentered">
      <GifCard
        v-for="gif in gifs"
        :key="gif.id"
        data-aos="fade-up"
        data-aos-duration="3000"
        :gif="gif"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Gifs',
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
