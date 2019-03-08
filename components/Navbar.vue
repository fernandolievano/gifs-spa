<template lang="html">
  <nav class="navbar is-dark" role="navigation" aria-label="Navbar">
    <div class="navbar-brand">
      <n-link to="/" class="navbar-item brand">
        Gif app
      </n-link>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainNavbar'
}
</script>

<style lang="css" scoped>
  nav {
    margin-bottom: 5em;
  }
  .brand {
    font-size: 2em;
  }
</style>
