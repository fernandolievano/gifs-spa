<template>
  <section class="container is-fluid">
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
button {
  transition: all 0.2s linear;
}
</style>
