import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
Vue.use(Vuex);
Vue.config.productionTip = false
const hello = "world";
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});
new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
