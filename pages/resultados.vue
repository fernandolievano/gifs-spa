<template>
  <section class="container">
    <div class="columns">
      <div class="column is-full has-text-centered">
        <div v-if="resultados.length > 0">
          <h1 id="busqueda" class="encabezado">
            Resultados...
          </h1>
          <h5 class="is-size-5">
            ¡{{ dataPagina.total_count }} resultados por ver!
          </h5>
        </div>
        
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
    <div v-if="resultados.length > 0" class="columns is-multiline is-vcentered">
      <div
        v-for="gif in resultados"
        :key="gif.id"
        class="column is-4-tablet column is-8-mobile is-offset-2-mobile"
      >
        <GifCard
          data-aos="fade-up"
          data-aos-duration="3000"
          :gif="gif"
        />
      </div>
      <div class="column is-8 is-offset-2 has-text-centered">
        <small>{{ dataPagina.offset + dataPagina.count }} de {{ dataPagina.total_count }} vistos <i class="fas fa-check-double" /></small>
      </div>
      <div class="column is-full is-clearfix">
        <a href="#busqueda" :disabled="prevDisabled" class="button is-link is-pulled-left">
          <span class="icon is-small">
            <i class="fas fa-caret-left" />
          </span>
          Anterior
        </a>
        <a href="#busqueda" :disabled="nextDisabled" class="button is-link is-pulled-right" @click="siguiente">
          Siguiente
          <span class="icon is-small">
            <i class="fas fa-caret-right" />
          </span>
        </a>
      </div>
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
      resultados: 'results',
      dataPagina: 'pagination'
    }),
    nextDisabled() {
      if (this.resultados.length > 1) {
        return this.dataPagina.offset === this.dataPagina.total_count - 1
      } else {
        return true
      }
    },
    prevDisabled() {
      if (this.resultados.length > 1) {
        return this.dataPagina.offset === 0
      } else {
        return true
      }
    }
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
