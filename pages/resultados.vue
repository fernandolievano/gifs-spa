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
    <div v-if="resultados" class="columns is-multiline is-vcentered">
      <div
        v-for="gif in resultados"
        :key="gif.id"
        class="column is-4-tablet is-8-mobile is-offset-2-mobile"
      >
        <GifCard
          data-aos="fade-up"
          data-aos-duration="3000"
          :gif="gif"
        />
      </div>
    </div>
    <div class="columns">
      <button class="buttton" @click="siguiente">
        Next
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return { page: 0 }
  },
  computed: {
    ...mapState({
      resultados: 'results'
    })
  },
  methods: {
    ...mapActions({
      siguiente: 'resultsNextPage'
    })
  }
}
</script>

<style>
</style>
