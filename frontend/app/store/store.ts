import Vue from 'vue'
import Vuex, {Store} from 'vuex'
import SliderModule from '../steps/final/slider/cp-slider-module'
import TabModule from '../steps/final/layout/cp-tab-module'
import ProfileModule from '../steps/final/profile/cp-profile-module'
import {supportPlugin} from "./support-plugin";

Vue.use(Vuex)

export interface State {
  supportActive: boolean
}

const store: Store<State> = new Vuex.Store({
  modules: {
    slider: new SliderModule(),
    tab: new TabModule(),
    profile: new ProfileModule()
  },

  // Support
  mutations: {
    'SUPPORT_OVERRIDE': (state: any, payload) => {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
      state.supportActive = true
    }
  },
  strict: true,
  plugins: [supportPlugin]

});

export default store
