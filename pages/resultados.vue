<template>
  <section class="container">
    <div class="columns">
      <div class="column is-full has-text-centered">
        <div v-if="resultados.length > 0">
          <h1 id="busqueda" class="encabezado">
            Resultados...
          </h1>
          <!-- <h5 class="is-size-5">
            ¡{{ pagination.total_count | numero }} resultados por ver!
          </h5> -->
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
      <div v-if="response !== null" class="column is-full">
        <ErrorKey :error="hasErrorKey" />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return { page: 0 }
  },
  head() {
    return {
      title: 'Resultados de búsqueda - Geefs'
    }
  },
  computed: {
    ...mapState({
      resultados: 'results',
      response: 'response'
    }),
    hasErrorKey() {
      return this.response.error === 'invalid key'
    }
  }
}
</script>
