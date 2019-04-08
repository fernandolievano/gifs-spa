import Vue from 'vue'

import GifCard from '~/components/GifCard.vue'
import ErrorKey from '~/components/ErrorKey.vue'
import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue'
import VueGoodshareTwitter from 'vue-goodshare/src/providers/Twitter.vue'
import VueGoodshareWhatsapp from 'vue-goodshare/src/providers/WhatsApp.vue'

Vue.component('GifCard', GifCard)
Vue.component('ErrorKey', ErrorKey)
Vue.component('VueGoodshareFacebook', VueGoodshareFacebook)
Vue.component('VueGoodshareTwitter', VueGoodshareTwitter)
Vue.component('VueGoodshareWhatsapp', VueGoodshareWhatsapp)
