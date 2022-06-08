# Error Handling

Error handling defined via `nuxt.config.ts`, `plugins/errors.ts`, `error.vue`.

## Actual

Config doesn't work - is my config wrong?

Plugins works, but the error being intercepted here is different from the final one that lands in `error.vue`

## Expected

* Error properties should propigate.  I would prefer some way of conveying objects/arrays so they can be formatted.
* Where is Nuxt internally rebuilding the error objects?  Is the behavior documented somewhere?  Is it something that can be overridden?
* I don't understand why the config intercepts don't work.  Could be better documented.
