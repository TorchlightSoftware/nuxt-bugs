export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = (error, context) => {
    console.log('plugin errorHandler')
    console.log('captured:', error)
  }
})
