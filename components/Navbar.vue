<template lang="html">
  <nav class="navbar is-black" role="navigation" aria-label="Navbar">
    <div class="navbar-brand">
      <n-link to="/" class="navbar-item brand">
        Gif app
      </n-link>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div class="navbar-end">
      <div v-if="isSearching" class="navbar-item">
        <p>Buscando gifs...</p>
      </div>
      <div v-if="success && resultButton" class="navbar-item">
        <n-link to="/resultados" class="button">
          Ver resultados
        </n-link>
      </div>
      <div class="navbar-item">
        <div class="control has-icons-left">
          <input v-model="query" type="text" class="input" placeholder="Busca tus gifs favoritos" @focus="success = false">
          <span class="icon is-left is-small">
            <i class="fas fa-search" />
          </span>
        </div>
      </div>
      <div class="navbar-item">
        <button class="button is-primary is-outlined" @click="search(query)">
          Buscar
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MainNavbar',
  data() {
    return {
      query: '',
      isSearching: false,
      success: false
    }
  },
  computed: {
    resultButton() {
      if (this.$route.path === '/resultados') {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    ...mapActions({
      searchGifs: 'searchGifs'
    }),
    async search(query) {
      this.isSearching = true
      await this.searchGifs(query)
      this.isSearching = false
      this.success = true
    }
  }
}
</script>

<style lang="css" scoped>
  nav {
    margin-bottom: 5em;
  }
  .brand {
    font-size: 2em;
  }
</style>
