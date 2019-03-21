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
@import url('https://cdn.jsdelivr.net/npm/animate.css@3.5.1');

body,
html {
  height: 100%;
  background-image: url('/paper.png');
  width: 100%;
  min-width: 100%;
  position: relative;
  scrollbar-color: blueviolet turquoise;
  scrollbar-width: thin;
}
footer {
  margin-top: 5em;
  margin-bottom: 0;
  background-image: url('/dark-triangles.png');
  background-repeat: repeat;
  right: 0;
  bottom: 0;
  left: 0;
}
.encabezado {
  font-size: 4em;
}
::-webkit-scrollbar {
  width: 8px;
  background-color: turquoise;
}
::-webkit-scrollbar-thumb {
  background-color: blueviolet;
}
</style>
