<template>
  <section class="section">
    <article class="container">
      <div class="columns is-centered is-vcentered is-multiline has-text-centered">
        <div class="column is-4-mobile is-offset-4-mobile is-4-tablet">
          <figure class="image">
            <img src="/geef.svg" alt="logo">
          </figure>
        </div>
        <div class="column is-full-mobile is-8-tablet">
          <h1 class="title">
            Geefs
          </h1>
          <p><b>Geefs</b> es tu lugar ideal para ver y buscar los mejores gifs para compartirlos con tus amigos en tus redes sociales <i class="far fa-smile-wink" /></p>
        </div>
        <div class="column is-full">
          <h1 class="is-size-1">
            Lo más buscado de Tenor
          </h1>
        </div>
        <div class="column is-full">
          <div class="columns is-multiline is-5 is-centered">
            <Categories 
              v-for="category in categories" 
              :key="category.searchterm" 
              :category="category"
            />
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import Categories from '~/components/CategoriesBoxes.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Gifs',
  components: { Categories },
  head() {
    return {
      title: 'Los mejores gifs para vos - Geefs'
    }
  },
  computed: {
    ...mapState(['response', 'categories']),
    hasErrorKey() {
      return this.response.error === 'invalid key'
    }
  },
  async created() {
    this.$toast.show('Cargando contenido...')
    await this.getAnonymousID()
    await this.fetchCategories()
    this.$toast.clear()
  },
  methods: {
    ...mapActions(['fetchCategories', 'getAnonymousID'])
  }
}
</script>

<style media="screen">
.button {
  transition: all 0.2s linear;
}
</style>
