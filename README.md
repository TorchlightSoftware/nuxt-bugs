# useRunTimeConfig outside setup causes rapid memory leak on dev server

`api/client.ts:`

```
const config = useRuntimeConfig()

client = {
  config: config.SERVER_API
}

// in real use case would create $fetch or axios client
// not relevant here because the error happens already

export default client
```

`npx nuxi dev`

```
[nuxt] [request error] nuxt instance unavailable
  at useNuxtApp (./.nuxt/dist/server/server.mjs:400:13)  
  at Module.useRuntimeConfig (./.nuxt/dist/server/server.mjs:408:10)  
  at $id_ca7d507e (./.nuxt/dist/server/server.mjs:2760:38)  
  at async __instantiateModule__ (./.nuxt/dist/server/server.mjs:3837:3)
```

At this point the dev server memory usage shoots up sharply, consuming all available memory on my laptop.
