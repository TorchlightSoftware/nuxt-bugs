<script setup>
  import {storeToRefs} from 'pinia'
  import {useAuthStore} from "~/stores/auth"

  const authStore = useAuthStore()
  const {user, isLoggedIn} = storeToRefs(authStore)
</script>

<template>
  <div>Welcome, {{user.fname}}!</div>
</template>
