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
