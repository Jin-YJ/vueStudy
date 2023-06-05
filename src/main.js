import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PageTitle from './components/fragments/PageTitle.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import mixins from './mixins'
// import i18nPlugin from './plugins'
import i18nPlugin from './plugins/i18n'
import en from './i18n/en'
import ko from './i18n/ko'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faUserClock } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { LoadingPlugin } from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import VueGoodTablePlugin from 'vue-good-table-next'
import 'vue-good-table-next/dist/vue-good-table-next.css'
import VueApexCharts from 'vue3-apexcharts'

library.add(faUserSecret)
library.add(faUserClock)

const i18nStrings = { en, ko }
const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueGoodTablePlugin)
app.use(VueApexCharts)
app.mixin(mixins)
app.mount('#app')
app.component('page-title', PageTitle)
app.component('font-awesome-icon', FontAwesomeIcon)
app.directive('focus', {
  mounted(el) {
    el.focus()
  }
})

app.directive('lowercase', {
  mounted(el) {
    el.addEventListener('input', (event) => {
      event.target.value = event.target.value.toLowerCase()
    })
  }
})

app.use(i18nPlugin, i18nStrings)
app.directive('uppercase', {
  mounted(el) {
    el.addEventListener('input', (event) => {
      event.target.value = event.target.value.toUpperCase()
    })
  }
})

app.directive('number', {
  mounted(el) {
    el.addEventListener('input', (event) => {
      event.target.value = event.target.value.replace(/\D/g, '')
    })
  }
})

app.directive('korean', {
  mounted(el) {
    el.addEventListener('input', (event) => {
      event.target.value = event.target.value.replace(
        /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,
        ''
      )
    })
  }
})
app.use(VueSweetalert2)
app.use(LoadingPlugin)
window.Kakao.init('00eae8fc00b142a9280f5a1e7e73ccb2')
