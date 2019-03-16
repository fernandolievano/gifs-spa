<template>
  <div class="columns is-centered is-vcentered is-centered is-multiline">
    <div class="column is-3">
      <button class="button  is-primary carousel-button" :disabled="hasntPrev" @click="previous">
        <span class="icon">
          <i class="fas fa-chevron-circle-left" />
        </span>
      </button>
    </div>
    <div class="column is-6">
      <transition
        enter-active-class="animated flipInY"
        leave-active-class="animated flipOutY"
        mode="out-in"
      >
        <GifCard :key="currentSlide.id" :gif="currentSlide" />
      </transition>
    </div>
    <div class="column is-3">
      <button class="button is-primary carousel-button" :disabled="hasntNext" @click="next">
        <span class="icon">
          <i class="fas fa-chevron-circle-right" />
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentSlideIndex: 0
    }
  },
  computed: {
    hasntPrev() {
      return this.currentSlideIndex === 0
    },
    hasntNext() {
      return this.currentSlideIndex === this.slides.length - 1
    },
    currentSlide() {
      return this.slides[this.currentSlideIndex]
    }
  },
  methods: {
    next() {
      this.currentSlideIndex++
    },
    previous() {
      this.currentSlideIndex--
    }
  }
}
</script>

<style scoped>
.carousel-button {
  border: none;
  margin: 2em;
  border-radius: 100%;
}
</style>
