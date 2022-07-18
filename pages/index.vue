<script setup>
const {auth} = useNuxtApp().stores
</script>

<template>
  <div>Welcome, Human!</div>
  <div :style="{color: auth.color}">{{auth.state}}</div>
</template>
