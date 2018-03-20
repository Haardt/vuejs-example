import {Module, Plugin} from "vuex";
import Vue from 'vue'

export interface TabItemState {
  [tabItems: string]: boolean
}

export class TabState {
  [tabs: string]: TabItemState
}

export default class TabModule implements Module<TabState, any> {
  namespaced: boolean = true;
  state: TabState;

  actions = {};

  mutations = {
    activateTab(state: TabState, payload: { tabName: string, tabItemId: string }) {
      let tabItemState: TabItemState = state[payload.tabName] ? state[payload.tabName] : {};

      // Vue.set(tabItemState, payload.tabItemId, tabItemState);

      Object.keys(tabItemState).forEach(key => {
        if (tabItemState[key] != null) {
          Vue.set(tabItemState, key, false)
        }
      });
      Vue.set(tabItemState, payload.tabItemId, true);
      Vue.set(state, payload.tabName, tabItemState);
    }
  };

  getters = {
    isTabActive: (state: TabState) => (tabName: string, tabItemId: number) => {
      if (state[tabName] == null || state[tabName][tabItemId] == null)
        return false;
      return state[tabName][tabItemId]
    }
  };

  constructor(plugins?: Plugin<TabState>[]) {
    this.state = new TabState()
  }
}
