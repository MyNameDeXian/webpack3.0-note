// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import {Button,Select,Input} from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Input);
Vue.component(Button.name,Button)
Vue.component(Select.name,Select)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render() {
    return(
      <div>
        <App></App>
      </div>
    )
  }
})
