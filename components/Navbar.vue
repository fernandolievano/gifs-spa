<template lang="html">
  <nav class="navbar is-black is-spaced" role="navigation" aria-label="Navbar">
    <div class="navbar-brand">
      <n-link to="/" class="navbar-item brand is-spaced">
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
      <div class="navbar-item is-expanded is-pulled-right">
        <div class="field has-addons">
          <div class="control has-icons-left">
            <input
              v-model="query"
              type="text"
              class="input is-fullwidth is-primary"
              placeholder="Busca tus gifs vía Tenor"
              @focus="success = false"
              @keyup.enter="search()"
              @input="setQuery(query)"
            >
            <span class="icon is-left is-small has-text-primary">
              <i class="fas fa-search" />
            </span>
          </div>
          <div class="control">
            <button class="button is-outlined is-primary" @click="search()">
              Buscar
            </button>
          </div>
        </div>
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
      showMenu: false
    }
  },
  methods: {
    ...mapActions(['searchGifs', 'setQuery', 'resetOffset']),
    async search() {
      this.isSearching = true
      await this.searchGifs(50)
      this.isSearching = false
      this.$router.push({ name: 'resultados' })
    },
    expand() {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style lang="css" scoped>
nav {
  margin-bottom: 3em;
}
.input {
  background-color: rgba(0, 0, 0, 0.5);
  color: #f8f8ff;
  opacity: 0.5;
}
::placeholder {
  color: turquoise;
  opacity: 0.6;
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
.navbar {
  animation: navbar-border;
  animation-duration: 50s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes navbar-border {
  5% {
    border-bottom: solid 0.1rem #3300cc;
  }
  10% {
    border-bottom: solid 0.1rem #33ff00;
  }
  15% {
    border-bottom: solid 0.1rem #4f99be;
  }
  20% {
    border-bottom: solid 0.1rem #663399;
  }
  25% {
    border-bottom: solid 0.1rem #cc6699;
  }
  30% {
    border-bottom: solid 0.1rem #ccff66;
  }
  35% {
    border-bottom: solid 0.1rem #cc0099;
  }
  40% {
    border-bottom: solid 0.1rem #3300cc;
  }
  45% {
    border-bottom: solid 0.1rem #ffcc33;
  }
  50% {
    border-bottom: solid 0.1rem #ccff33;
  }
  55% {
    border-bottom: solid 0.1rem #99ffff;
  }
  60% {
    border-bottom: solid 0.1rem #ff3333;
  }
  65% {
    border-bottom: solid 0.1rem #990066;
  }
  70% {
    border-bottom: solid 0.1rem #3333cc;
  }
  75% {
    border-bottom: solid 0.1rem #cc99cc;
  }
  80% {
    border-bottom: solid 0.1rem #669900;
  }
  85% {
    border-bottom: solid 0.1rem #66ff00;
  }
  90% {
    border-bottom: solid 0.1rem #6699ff;
  }
  95% {
    border-bottom: solid 0.1rem #6600ff;
  }
  100% {
    border-bottom: solid 0.1rem #cc6600;
  }
}
</style>
