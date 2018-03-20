import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import {sync} from "vuex-router-sync";
import VueResource from "vue-resource"
import vuexI18n from 'vuex-i18n';
import * as translationsEn from './assets/i18n/en.json';
import * as translationsDe from './assets/i18n/de.json';
import VertxEventBus from 'vue-vertx3-eventbus-client'

import Sock from 'sockjs'

Vue.config.productionTip = false
Vue.use(VertxEventBus, { host:'localhost', path: '/eventbus', port: 8085,
    transports: [
      'websocket'
    ],
  })
Vue.eventBus = Vue.prototype.$eventBus
Vue.eventBus.onopen = () => {
  const unsync = sync(store, router)
  Vue.use(VueResource);

  Vue.use(vuexI18n.plugin, store);
  Vue.i18n.add('en', translationsEn);
  Vue.i18n.add('de', translationsDe);
  Vue.i18n.set('de');

  new Vue({
    el: '#app',
    router, store,
    render: h => h(App),
  })
}


