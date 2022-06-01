# Getter with same name as State -> Overflows Stack

```ts
import {defineStore} from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {fname: 'Donna', lname: 'Renolds'},
  }),

  getters: {
    user: (state) => state.user,
  },

  actions: {
  },
})

```

Expected: This should produce an error telling the application developer not to do this.
