<template lang="html">
  <div class="column is-one-third">
    <div class="card">
      <img :src="gif.images.downsized.url" :alt="gif.slug">
    </div>
  </div>
</template>

<script>
export default {
  name: 'GifsCard',
  props: {
    gif: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
</style>
