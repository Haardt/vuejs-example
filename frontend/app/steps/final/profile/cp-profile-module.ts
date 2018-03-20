import {ActionContext, Module, Plugin} from "vuex";
import Vue from 'vue'
import {SliderPayload} from "../slider/cp-slider-module";
import {State} from "../../../store/store";

export class ProfileState {
  loading: boolean
  saving: boolean
  lang: string
}

export default class TabModule implements Module<ProfileState, any> {
  namespaced: boolean = true;
  state: ProfileState;

  actions = {
    loadProfile({commit}: ActionContext<ProfileState, State>) {
      commit('loadingProfile')
      Vue.http.get("http://localhost:8085/profile").then((response: any) => {
        let entity = response.body
        commit('slider/update', new SliderPayload('r', entity.r), { root: true })
        commit('slider/update', new SliderPayload('g', entity.g), { root: true })
        commit('slider/update', new SliderPayload('b', entity.b), { root: true })
        commit('storeLanguage', entity.lang)
        commit('i18n/SET_LOCALE', {locale: entity.lang}, { root: true })
        commit('loadingSuccessful')
      }, (errorResponse: any) => {
        commit('loadingSuccessful')
        // and errors
      })
    },
    saveProfile({state, commit, rootGetters}: ActionContext<ProfileState, State>): Promise<string> {
      return new Promise<string>( (resolve, reject) => {
        commit('savingProfile')

        let profileEntity = {
          r: rootGetters['slider/getSliderValue']('r'),
          g: rootGetters['slider/getSliderValue']('g'),
          b: rootGetters['slider/getSliderValue']('b'),
          lang: state.lang
        }

        Vue.http.post('http://localhost:8085/profile', profileEntity).then((response: any) => {
          commit('savingSuccessful')
          resolve('OK')
        }, (errorResponse: any) => {
          commit('savingSuccessful')
          reject('ERROR')
        })
      })
    }
  };

  mutations = {
    loadingProfile(state: ProfileState) {
      state.loading = true
    },
    loadingSuccessful(state: ProfileState) {
      state.loading = false
    },
    savingProfile(state: ProfileState) {
      state.saving = true
    },
    savingSuccessful(state: ProfileState) {
      state.saving = false
    },
    storeLanguage(state: ProfileState, lang: string) {
      state.lang = lang
    }
  };

  getters = {
    isProfileLoading: (state: ProfileState) => () => {
      return state.loading
    },
    isProfileSaving: (state: ProfileState) => () => {
      return state.saving
    }
  };

  constructor(plugins?: Plugin<ProfileState>[]) {
    this.state = new ProfileState()
    this.state.loading = false
    this.state.saving = false
    this.state.lang = 'de'
  }
}
