<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-full">
          <h1 class="is-size-1-tablet is-size-2-mobile">
            Los stickers más populares del momento
          </h1>
        </div>
      </div>
      <div class="columns is-multiline">
        <div
          v-for="sticker in stickers" 
          :key="sticker.id"
          class="column is-4-tablet is-8-mobile is-offset-2-mobile"
        >
          <GifCard
            :gif="sticker"
            data-aos="zoom-in"
            data-aos-duration="1500"
          />
        </div>
      </div>
    </div>
    <Pagination v-if="pagination" page="stickers" :pagination-data="pagination" />
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  head() {
    return {
      title: 'Stickers del momento - Geefs'
    }
  },
  computed: {
    ...mapState(['stickers', 'pagination'])
  },
  async mounted() {
    this.$toast.show('Cargando contenido...')
    await this.fetch(15)
    this.$toast.clear()
  },
  methods: {
    ...mapActions({
      fetch: 'fetchStickers'
    })
  }
}
</script>

<style>
</style>
