import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [],
  errorHandler(err) {
    console.log('app.errorHandler')
    console.log('captured:', err)
    return true
  },
  hooks: {
    onErrorCaptured(err) {
      console.log('onErrorCaptured')
      console.log('captured:', err)
      return true
    },
    'vue:error': function(err) {
      console.log('vue:error')
      console.log('captured:', err)
      return true
    },
  },
})
