import Vue from 'vue'
import App from './App'

import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'

Vue.config.productionTip = false
Vue.component('page-head', pageHead)
Vue.component('page-foot', pageFoot)
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
