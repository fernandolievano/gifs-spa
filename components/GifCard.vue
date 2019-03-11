<template lang="html">
  <div class="column is-4">
    <div class="card shadow" :class="randomBackground">
      <div class="card-content">
        <div class="content">
          <img :src="gif.images.downsized.url" :alt="gif.slug" class="gif">
        </div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <button class="button is-fullwidth" :class="[gradientButton ? 'button-gradient-dark' : 'button-gradient-light']" @click="copyLink(gif.bitly_url)">
            <div class="icon">
              <i class="fas fa-link" />
            </div>
          </button>
        </div>
      </footer>
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
    },
    gradientButton() {
      if (this.randomBackground === 'has-background-black') {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    copyLink(link) {
      navigator.clipboard.writeText(link).then(
        function() {
          alert('¡Copiado al portapapeles!')
        },
        function(err) {
          alert('No se pudo copiar el texto: ', err)
        }
      )
    }
  }
}
</script>

<style lang="css" scoped>
.gif {
  width: 100%;
  min-height: 100% !important;
  margin-top: auto;
  margin-bottom: auto;
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
.card-content .content {
  min-height: 100%;
}
.card-footer {
  background: none !important;
  border:none;
}
.button {
  border: none
}
.button:hover {
  box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.button-gradient-dark:hover {
  box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(230, 230, 230, 0.19);
}
.button-gradient-dark {
  background: linear-gradient(to bottom, #a7d129, #99FFFF);
  color: #1B2631;
}
.button-gradient-light {
  background: linear-gradient(to bottom,  #633974, #1A5276);
  color: #D6DBDF;
}
</style>
