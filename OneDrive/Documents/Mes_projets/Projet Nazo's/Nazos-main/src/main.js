import Vue from 'vue'
import App from './App.vue'
import router from './router'
// VUESWEETALERT
import VueSweetalert2 from 'vue-sweetalert2'
// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'
// VUE-JS-MODAL
import VModal from 'vue-js-modal/dist/index.nocss.js'
import 'vue-js-modal/dist/styles.css'
/* VUE-MATERIAL
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueMaterial from 'vue-material' */

// VUELIDATE
import Vuelidate from 'vuelidate'

import store from './store'


Vue.use(VueSweetalert2);
Vue.AOS = new AOS.init();
Vue.use(VModal);
// Vue.use(VueMaterial);
Vue.use(Vuelidate);
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')