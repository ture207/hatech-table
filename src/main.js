import Vue from 'vue'
import App from './App.vue'

import hatechTable from './index.js' //使用本地的

Vue.use(hatechTable)

new Vue({
    el: '#app',
    render: h => h(App)
})