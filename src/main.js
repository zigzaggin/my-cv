import Vue from 'vue'
import "./components"

import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

Vue.use(FontAwesomeIcon);
Vue.component('fai', FontAwesomeIcon);

import App from './App.vue'
import router from "./routes"

Vue.config.productionTip = false;
new Vue({
    render: h => h(App),
    router
}).$mount('#app');
