import createStores from '~/stores/index'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  nuxtApp.stores = createStores(config.public)
})
