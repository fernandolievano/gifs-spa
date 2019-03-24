import Vue from 'vue'

Vue.filter('numero', num => Number(num).toLocaleString())
