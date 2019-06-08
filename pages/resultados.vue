<template>
  <section class="section">
    <article class="container">
      <div class="columns">
        <div class="column is-full has-text-centered">
          <div v-if="resultados.length > 0">
            <h1 id="busqueda" class="is-size-1-tablet is-size-2-mobile">
              Resultados...
            </h1>
          </div>
        
          <transition v-else appear appear-active-class="animated flash">
            <h1 class="is-size-1-tablet is-size-2-mobile has-text-danger">
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

      <div v-if="resultados.length > 0" class="masonry-container">
        <div
          v-for="gif in resultados"
          :key="gif.id"
          class="item"
        >
          <GifCard
            :gif="gif"
          />
        </div>
      </div>
    </article>
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
