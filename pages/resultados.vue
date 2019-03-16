<template>
  <section class="container">
    <div class="columns">
      <div class="column is-full has-text-centered">
        <h1 v-if="resultados.length > 0" class="encabezado">
          Resultados...
        </h1>
        <transition v-else appear appear-active-class="animated flash">
          <h1 class="encabezado has-text-danger">
            No hay resultados para mostrar... <span><i class="fas fa-heart-broken" /></span>
            <br>
            <n-link to="/" class="button is-primary">
              <span class="icon is-small">
                <i class="fas fa-arrow-circle-left" />
              </span>
              <span>Volver a la página principal</span>
            </n-link>
          </h1>
        </transition>
      </div>
    </div>
    <div class="columns is-multiline is-vcentered">
      <div
        v-for="gif in resultados"
        :key="gif.id"
        class="column is-3-desktop is-4-tablet"
      >
        <GifCard
          data-aos="fade-up"
          data-aos-duration="3000"
          :gif="gif"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      resultados: 'results'
    })
  }
}
</script>

<style>
</style>
