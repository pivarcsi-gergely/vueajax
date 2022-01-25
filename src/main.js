import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import StatueItem from './components/StatueItem.vue';
import Info from './components/Info.vue';

Vue.use(VueRouter)


Vue.config.productionTip = false

const routes = [
  {
  path: '/',
  component: StatueItem
  },
  {
    path: '/info',
    component: Info
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
