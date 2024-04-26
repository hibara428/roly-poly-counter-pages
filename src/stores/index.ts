import type { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { State } from '@/types'

export const key: InjectionKey<Store<State>> = Symbol()
export const store = createStore<State>({
  state: {
    errors: [],
    messages: [],
    user: {
      id: 0,
      email: '-'
    }
  }
})
