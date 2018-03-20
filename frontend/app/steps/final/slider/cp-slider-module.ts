import {Module, Plugin} from "vuex";
import Vue from 'vue'


export class SliderPayload {
  constructor(readonly name: string,
              readonly value: number,) {
  }
}

export class SliderState {
  [slider: string]: Number
}

export default class CpTabModule implements Module<SliderState, any> {
  namespaced: boolean = true;
  state: SliderState;

  actions = {};

  mutations = {
    update (state: SliderState, {name, value}: SliderPayload) {
      Vue.set(state, name, value);
    }
  };

  getters = {
    getSliderValue: (state: SliderState) => (name: string) => {
      if (state[name] == null)
        return -1;
      return state[name]
    }
  };

  constructor(plugins?: Plugin<SliderState>[]) {
    this.state = new SliderState()
  }
}

