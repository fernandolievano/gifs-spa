<template>
  <div v-if="showMessage" class="notification">
    <button class="delete" @click="closeMessage" />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: {
    message: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showMessage: true
    }
  },
  methods: {
    closeMessage() {
      this.showMessage = false
    }
  }
}
</script>
