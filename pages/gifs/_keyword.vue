<template>
  <section class="section">
    <article class="container">
      <div class="columns">
        <div class="column is-full has-text-centered">
          <h1 class="is-size-1">
            {{ $route.params.keyword }}
          </h1>
        </div>
      </div>
      <div v-if="gifs.length > 0" class="columns is-centered is-multiline is-vcentered">
        <div
          v-for="gif in gifs"
          :key="gif.id"
          class="column is-4-tablet column is-8-mobile is-offset-2-mobile"
        >
          <GifCard
            data-aos="fade-up"
            data-aos-duration="3000"
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
  computed: {
    ...mapState(['gifs'])
  }
}
</script>

<style>
</style>
