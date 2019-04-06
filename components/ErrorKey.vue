<template>
  <div v-if="error" class="notification is-danger has-text-centered">
    Error con la key
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Boolean
    }
  }
}
</script>
