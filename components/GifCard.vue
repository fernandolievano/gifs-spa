<template lang="html">
  <div class="column is-4">
    <div class="card" :class="randomBackground">
      <div class="card-content">
        <div class="content">
          <img :src="gif.images.downsized.url" :alt="gif.slug" class="gif">
        </div>
      </div>
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
  },
  data() {
    return {
      backgrounds: [
        'has-background-black',
        'has-background-light',
        'has-background-dark',
        'has-background-primary',
        'has-background-info',
        'has-background-link',
        'has-background-success',
        'has-background-warning',
        'has-background-danger',
        'has-background-purple',
        'has-background-lime',
        'has-background-indigo',
        'has-background-red'
      ]
    }
  },
  computed: {
    randomBackground() {
      const backgrounds = this.backgrounds
      return backgrounds[Math.floor(Math.random() * backgrounds.length)]
    }
  }
}
</script>

<style lang="css" scoped>
.gif {
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
}
.card {
  min-height: 100%;
}
.content {
  align-items: center;
  display: flex;
}
.has-background-purple {
  background-color: #421b9b
}
.has-background-lime {
  background-color: #a7d129
}
.has-background-violette {
  background-color: #612147
}
.has-background-indigo {
  background-color: #503bff
}
.has-background-red {
  background-color: #dd0a35
}
.shadow {
  -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);
}
</style>
