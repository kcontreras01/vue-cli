// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import vueRouter from 'vue-router'
import test from './components/Test'
import users from './components/Users'


Vue.config.productionTip = false
Vue.use(vueResource)
Vue.use(vueRouter)

const router = new vueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{ path: '/', component: users },
		{ path: '/test', component: test },
	]
})
/* eslint-disable no-new */
new Vue({
	router,
  el: '#app',
  router,
  template: `
  <div>
  	<div id="app"/>
  		<ul>
  			<li><router-link to="/">Users</router-link></li>
  			<li><router-link to="/test">Test</router-link></li>
  		</ul>
  		<router-view></router-view>
  	</div>
  	</div>
  `,
}).$mount('#app')

