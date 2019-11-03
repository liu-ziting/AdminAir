import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import {router} from './route.js'
import App from './App.vue'

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
