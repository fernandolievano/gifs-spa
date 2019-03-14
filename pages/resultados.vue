<template>
  <section class="container">
    <div class="columns">
      <div class="column is-full has-text-centered">
        <h1 v-if="resultados.length > 0" class="encabezado">
          Resultados...
        </h1>
        <h1 v-else class="encabezado has-text-danger">
          No hay resultados para mostrar... <span><i class="fas fa-heart-broken" /></span>
          <br>
          <n-link to="/" class="button is-primary">
            <span class="icon is-small">
              <i class="fas fa-arrow-circle-left" />
            </span>
            <span>Volver a la página principal</span>
          </n-link>
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
  </section>
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
