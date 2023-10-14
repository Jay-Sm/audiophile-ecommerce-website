<template>
  <router-view></router-view>

  <router-link class="text-blue-700 underline inline-block pt-5" :to="{ name: 'home' }">Home View</router-link>
  <br>
  <router-link class="text-blue-700 underline inline-block" :to="{ name: 'about' }">About View</router-link>
</template>

<script setup>
</script>

<style></style>