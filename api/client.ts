const config = useRuntimeConfig()

client = {
  config: config.SERVER_API
}

// in real use case would create $fetch or axios client
// not relevant here because the error happens already

export default client
