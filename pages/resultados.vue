<template>
  <div class="container">
    <div class="columns">
      <div class="column is-full">
        <h1 v-if="resultados.length > 0" class="is-size-1">
          Resultados...
        </h1>
        <h1 v-else class="is-size-1">
          No hay resultados para mostrar
        </h1>
      </div>
    </div>
    <div class="columns is-multiline is-vcentered">
      <GifCard
        v-for="gif in resultados"
        :key="gif.id"
        data-aos="fade-up"
        data-aos-duration="3000"
        :gif="gif"
      />
    </div>
  </div>
</template>

<script>
import GifCard from '~/components/GifCard.vue'
import { mapState } from 'vuex'

export default {
  components: { GifCard },
  computed: {
    ...mapState({
      resultados: 'results'
    })
  }
}
</script>

<style>
</style>
