<template>
  <div
    class="column is-narrow"
    data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"
  >
    <a @click="goTo(category.path, category.name)">
      <div class="card is-shadowless is-borderless category">
        <h4 class="is-size-4 has-text-centered">
          {{ category.name }}
        </h4>
        <img :src="category.image" :alt="category.searchterm">
      </div>
    </a>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['fetchByCategory']),
    async goTo(path, keyword) {
      this.$toast.show('Cargando contenido...')
      await this.fetchByCategory(path)
      await this.$router.push({
        name: 'gifs-keyword',
        params: { keyword: keyword }
      })
      this.$toast.clear()
    }
  }
}
</script>

<style>
.category {
  transition: all 0.5s ease-in-out;
}
.category:hover {
  transform: scale(1.1);
  color: #6692ff;
}
.category:active {
  color: #4400aa;
}
</style>
