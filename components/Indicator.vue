<template>
  <div class="tags has-addons is-centered">
    <span class="tag is-rounded" :class="[isLast ? 'is-primary' : 'is-light']">{{ current }}</span> 
    <span class="tag is-primary is-rounded">{{ length }}</span> 
  </div>
</template>

<script>
export default {
  props: {
    current: {
      type: Number,
      required: true
    },
    length: {
      type: Number,
      required: true
    }
  },
  computed: {
    isLast() {
      return this.current === this.length
    }
  }
}
</script>

<style>
</style>
