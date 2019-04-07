<template lang="html">
  <nav class="navbar is-black" role="navigation" aria-label="Navbar">
    <div class="navbar-brand">
      <n-link to="/" class="navbar-item brand">
        <img src="/geef.svg" class="logo" alt="logo">
      </n-link>
      <a
        role="button"
        class="navbar-burger burger"
        :class="[showMenu ? 'is-active' : '']"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar"
        @click="expand"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div class="navbar-menu" :class="[showMenu ? 'is-active' : '']">
      <div class="navbar-start">
        <n-link to="/tendencias/gifs" class="navbar-item has-text-light">
          Gifs Populares
        </n-link>
      </div>
    </div>
    <div class="navbar-end">
      <div v-if="isSearching" class="navbar-item">
        <p>Buscando gifs...</p> <i class="far fa-smile-wink" />
      </div>
      <div class="navbar-item">
        <div class="field has-addons">
          <div class="control has-icons-left">
            <input
              v-model="query"
              type="text"
              class="input"
              placeholder="Busca tus gifs vía Tenor"
              @focus="success = false"
              @keyup.enter="search()"
              @input="setQuery(query)"
            >
            <span class="icon is-left is-small">
              <i class="fas fa-search" />
            </span>
          </div>
          <div class="control">
            <button class="button is-primary" @click="search()">
              Buscar
            </button>
          </div>
        </div>
      </div>
      <div class="navbar-item has-text-right" />
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
      showMenu: false
    }
  },
  methods: {
    ...mapActions(['searchGifs', 'setQuery', 'resetOffset']),
    async search() {
      this.isSearching = true
      await this.searchGifs(25)
      this.isSearching = false
      this.$router.push({ name: 'resultados' })
    },
    expand() {
      const isActive = this.showMenu

      if (isActive) {
        this.showMenu = false
      } else {
        this.showMenu = true
      }
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
.navbar-menu {
  background-color: transparent;
}
.navbar-item {
  transition: ease 0.5s;
}
.navbar-item:hover {
  background-color: transparent;
  color: turquoise;
}
</style>
