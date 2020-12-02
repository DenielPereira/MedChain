import Vue from 'vue'
import App from './App.vue'

// Routes
import VueRouter from 'vue-router'
import router from './router'

// Vuex
import store from './store';

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')