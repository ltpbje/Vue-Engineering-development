import Vue from 'vue'
import App from './App.vue'
// 导入需要全局注册的组件
import HmButton from './components/HmButton.vue'
// 调用Vue.component进行全局注册
// Vue.component('组件名'，组件对象)
Vue.component('HmButton', HmButton);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
