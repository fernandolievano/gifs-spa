<template lang="html">
  <div class="card shadow has-text-centered" :class="randomBackground">
    <div class="card-image">
      <a @click="showModal = true">
        <img v-lazy="gif.images.downsized.url" :alt="gif.slug" class="gif" lazy="loading">
      </a>
      <modal :is-active="showModal" @close="showModal = false">
        <img v-lazy="gif.images.original.url" :alt="gif.slug" lazy="loading">
      </modal>
    </div>
    <div class="card-content">
      <small class="is-italic" :class="[darkText ? 'has-text-grey-dark' : 'has-text-white-ter']">
        {{ gif.title }}
      </small>
    </div>
    <footer class="card-footer">
      <div class="card-footer-item">
        <button class="button button-gradient" @click="copyLink(gif.bitly_url)">
          <div class="icon">
            <i class="fas fa-link" />
          </div>
        </button>
      </div>
    </footer>
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
        'has-background-dark',
        'has-background-info',
        'has-background-link',
        'has-background-success',
        'has-background-warning',
        'has-background-danger',
        'has-background-purple',
        'has-background-lime',
        'has-background-indigo',
        'has-background-red'
      ],
      showModal: false
    }
  },
  computed: {
    randomBackground() {
      const backgrounds = this.backgrounds
      return backgrounds[Math.floor(Math.random() * backgrounds.length)]
    },
    darkText() {
      if (
        this.randomBackground === 'has-background-warning' ||
        this.randomBackground === 'has-background-lime'
      ) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    async copyLink(link) {
      await navigator.clipboard.writeText(link)
      this.$toast.success('¡Enlace copiado al portapapeles!', {
        duration: 850
      })
    }
  }
}
</script>

<style lang="css" scoped>
.card {
  padding: 0.5em;
}
.gif {
  width: auto;
  height: 10em;
  opacity: .75;
  transition: linear .5s;
}
.gif:hover {
  opacity: 1;
}
img[lazy="loading"] {
  background-image: url('/loading.gif');
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: 15%
}
.has-background-purple {
  background-color: #421b9b;
}
.has-background-lime {
  background-color: #a7d129;
}
.has-background-violette {
  background-color: #612147;
}
.has-background-indigo {
  background-color: #503bff;
}
.has-background-red {
  background-color: #dd0a35;
}
.shadow {
  -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
}
.card-content {
  height: 8em;
}
.card-footer {
  background: none !important;
  border: none;
}
.button {
  border: none;
}
.button:hover {
  box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.button-gradient {
  background: linear-gradient(to bottom, #633974, #1a5276);
  color: #d6dbdf;
}
footer {
  margin-top: 0;
}
</style>
