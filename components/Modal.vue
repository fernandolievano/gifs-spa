<template>
  <div class="modal is-clipped" :class="[isActive ? 'is-active' : '']">
    <div class="modal-background" />
    <div class="modal-content">
      <slot />
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('close')" />
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style>
</style>
