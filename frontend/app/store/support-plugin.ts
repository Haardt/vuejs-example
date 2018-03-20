import Vue from 'vue'
import {State} from "./store";

interface Mutation {
  type: String
  payload: any
}

export const supportPlugin = (store: any) => {
  store.subscribe(({type, payload}: Mutation, state: State) => {
      if (!state.supportActive) {
        Vue.eventBus.send('support-incoming', state, {}, function (err: any, reply: any) {
          if (err) {
            console.error('eventbus-error', err)
            return
          }
        })
      }
    }
  )
}
