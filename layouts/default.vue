<template>
  <div>
    <MainNavbar />
    <Message class="is-warning">
      <p>
        <span class="icon">
          <i class="fas fa-exclamation"></i>
        </span>
        <b>Actualmente estamos trabajando en actualizar Geefs</b>
      </p>
    </Message>
    <nuxt />
    <MainFooter />
  </div>
</template>

<script>
import MainNavbar from '~/components/Navbar.vue'
import MainFooter from '~/components/Footer.vue'
import Message from '~/components/Message.vue'

export default {
  components: { MainNavbar, MainFooter, Message }
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
  scrollbar-color: #4400aa turquoise;
  scrollbar-width: thin;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
.masonry-container {
  column-gap: 1em;
}
.item {
  display: inline-block;
  margin: 0 0 1em;
  width: 100%;
}
@media only screen and (min-width: 1024px) {
  .masonry-container {
    column-count: 4;
  }
}
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .masonry-container {
    column-count: 3;
  }
}
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .masonry-container {
    column-count: 2;
  }
}
.notification {
  border-radius: 0;
}
.footer {
  margin-top: 20em;
  margin-bottom: 0;
  background-image: url('/dark-triangles.png');
  background-repeat: repeat;
}
.encabezado {
  font-size: 4em;
}
.is-size-8 {
  font-size: 0.65em;
}
::-webkit-scrollbar {
  width: 8px;
  background-color: turquoise;
}
::-webkit-scrollbar-thumb {
  background-color: #4400aa;
}
</style>
