<template>
  <nav class="navbar is-black">
    <div class="navbar-menu has-text-centered is-active">
      <div class="navbar-start ">
        <a href="#" class="navbar-item " @click="prevPage(page)">
          <span class="icon is-medium has-text-link">
            <i class="fas fa-caret-left" />
          </span> 
          Anterior
        </a>
      </div>
      <!-- <small class="navbar-item">
        {{ paginationData.offset + paginationData.count | numero }} de {{ paginationData.total_count | numero }}
      </small> -->
      <div class="navbar-end">
        <a href="#" class=" navbar-item" @click="nextPage(page)">
          Siguiente 
          <span class="icon is-medium has-text-link">
            <i class="fas fa-caret-right" />
          </span>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    page: {
      type: String,
      required: true
    },
    nextGifs: {
      type: Number,
      required: true
    }
  },
  computed: {
    prevDisabled() {
      return this.nextGifs < 0
    }
    // nextDisabled() {
    //   return this.paginationData.offset === this.paginationData.total_count - 1
    // }
  },
  methods: {
    ...mapActions({
      siguienteGifs: 'gifsNextPage',
      anteriorGifs: 'gifsPreviousPage',
      siguienteStickers: 'stickersNextPage',
      anteriorStickers: 'stickersPreviousPage',
      siguienteResultados: 'resultsNextPage',
      anteriorResultados: 'resultsPreviousPage'
    }),
    async nextPage(page) {
      switch (page) {
        case 'gifs':
          this.$toast.show('Cargando contenido...')
          await this.siguienteGifs()
          this.$toast.clear()
          break

        case 'stickers':
          this.$toast.show('Cargando contenido...')
          await this.siguienteStickers()
          this.$toast.clear()
          break

        case 'resultados':
          this.$toast.show('Cargando contenido...')
          await this.siguienteResultados()
          this.$toast.clear()
          break

        default:
          break
      }
    },
    async prevPage(page) {
      switch (page) {
        case 'gifs':
          this.$toast.show('Cargando contenido...')
          await this.anteriorGifs()
          this.$toast.clear()
          break

        case 'stickers':
          this.$toast.show('Cargando contenido...')
          await this.anteriorStickers()
          this.$toast.clear()
          break

        case 'resultados':
          this.$toast.show('Cargando contenido...')
          await this.anteriorResultados()
          this.$toast.clear()
          break

        default:
          break
      }
    }
  }
}
</script>

<style lang="css" scoped>
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
