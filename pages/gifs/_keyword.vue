<template>
  <section class="section">
    <article class="container">
      <div class="columns is-multiline is-centered">
        <div class="column is-full is-narrow has-text-centered">
          <h1 class="is-size-1-desktop is-size-2-tablet is-size-4-mobile">
            {{ $route.params.keyword }}
          </h1>
        </div>
      </div>
      <div v-if="gifs.length > 0" class="masonry-container">
        <div
          v-for="gif in gifs"
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
  head() {
    return {
      title: `${this.$route.params.keyword} en Geefs`
    }
  },
  computed: {
    ...mapState(['gifs'])
  }
}
</script>

<style>
</style>
