<template>
  <div>
    <MainNavbar />
    <nuxt />
    <MainFooter />
  </div>
</template>

<script>
import MainNavbar from '~/components/Navbar.vue'
import MainFooter from '~/components/Footer.vue'

export default {
  components: { MainNavbar, MainFooter }
}
</script>

<style media="screen">
body,
html {
  height: 100%;
  background-image: url('/paper.png');
  width: 100%;
  min-width: 100%;
}
body {
  margin: 0;
  padding-bottom: 6rem;
  min-height: 100%;
}
footer {
  margin-top: 5em;
  background-image: url('/dark-triangles.png');
  background-repeat: repeat;
  right: 0;
  bottom: 0;
  left: 0;
}
.encabezado {
  font-size: 5em;
}
</style>
