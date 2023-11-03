<template>
  <div v-if="routeName == 'home'" class="h-screen w-full px-[11.5rem] text-white hero overflow-y-hidden">
    <header>
      <div class="flex flex-row justify-between py-9 select-none">
        <router-link :to="{ name: 'home' }">
          <img class="min-w-fit logo" src="./assets/images/shared/desktop/logo.svg" alt="">
        </router-link>
        <nav class="nav-text">
          <ul class="flex flex-row gap-10 font-bold tracking-[0.13rem]">
            <li><router-link :to="{ name: 'home' }" class="transition-colors hover:text-theme-orange2">{{
              "Home".toUpperCase() }}</router-link></li>
            <li><router-link :to="{ name: 'headphones' }" class="transition-colors hover:text-theme-orange2">{{
              "Headphones".toUpperCase() }}</router-link>
            </li>
            <li><router-link :to="{ name: 'speakers' }" class="transition-colors hover:text-theme-orange2">{{
              "Speakers".toUpperCase() }}</router-link></li>
            <li><router-link :to="{ name: 'earphones' }" class="transition-colors hover:text-theme-orange2">{{
              "Earphones".toUpperCase() }}</router-link></li>
          </ul>
        </nav>
        <div>
          <button>
            <img class="cart-icon-desktop" src="./assets/images/shared/desktop/icon-cart.svg" alt="">
          </button>
        </div>
      </div>

      <div class="h-[0.053rem] bg-[#ffffff5b] relative z-10"></div>
    </header>

    <div class="flex h-full flex-col justify-center">
      <div class="max-w-fit -mt-10">
        <h3 class="text-xl tracking-[0.8rem] text-theme-gray2">{{ "New Product".toUpperCase() }}</h3>
        <h1 class="text-7xl font-bold max-w-[28rem] mt-3">XX99 Mark II Headphones</h1>
        <p class=" my-8 max-w-[28rem] opacity-75">Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.</p>
      </div>
      <router-link :to="{ name: 'headphones' }"
        class="bg-theme-orange2 hover:bg-theme-orange transition-colors  to-product">{{ "See Product".toUpperCase()
        }}</router-link>
    </div>
  </div>

  <div class="overflow-x-hidden">
    <router-view></router-view>
  </div>

  <footer class="absolute left-0 h-[20rem] w-screen  bg-theme-black flex justify-center">
    <div class="flex flex-col gap-y-[3rem] max-w-[120rem] w-full px-[11.5rem]">
      <div class="flex flex-row">
        <div class="w-[6.667rem] h-[0.267rem] bg-theme-orange2"></div>
      </div>

      <div class="flex flex-row justify-between">
        <router-link :to="{ name: 'home' }">
          <img class="min-w-fit logo" src="./assets/images/shared/desktop/logo.svg" alt="">
        </router-link>

        <ul class="text-white flex flex-row gap-10 font-bold text-sm tracking-[0.13rem]">
          <li><router-link :to="{ name: 'home' }" class="transition-colors hover:text-theme-orange2">{{
            "Home".toUpperCase() }}</router-link></li>
          <li><router-link :to="{ name: 'headphones' }" class="transition-colors hover:text-theme-orange2">{{
            "Headphones".toUpperCase() }}</router-link>
          </li>
          <li><router-link :to="{ name: 'speakers' }" class="transition-colors hover:text-theme-orange2">{{
            "Speakers".toUpperCase() }}</router-link></li>
          <li><router-link :to="{ name: 'earphones' }" class="transition-colors hover:text-theme-orange2">{{
            "Earphones".toUpperCase() }}</router-link></li>
        </ul>
      </div>

      <div class="flex flex-row justify-between">
        <p class="text-theme-gray2 w-[37.5rem] leading-[1.667rem]">
          Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound
          specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
          facility - we’re open 7 days a week.
        </p>
        <div class="flex flex-row gap-x-5">
          <a href="https://www.facebook.com"><img src="./assets/images/shared/desktop/icon-facebook.svg" alt=""></a>
          <a href="https://www.twitter.com/"><img src="./assets/images/shared/desktop/icon-twitter-x.svg" alt=""></a>
          <a href="https://www.instagram.com"><img src="./assets/images/shared/desktop/icon-instagram.svg" alt=""></a>
        </div>
      </div>
      <div>
        <p class="text-theme-gray2 w-[37.5rem] leading-[1.667rem]"> Copyright 2021. All Rights Reserved </p>
      </div>

    </div>

  </footer>
</template>

<script setup>
import { watchEffect, ref } from "vue";
import { useRouter } from 'vue-router'

const router = useRouter()
const routeName = ref(router.currentRoute.value.name)

watchEffect(() => { routeName.value = router.currentRoute.value.name; console.log(routeName.value, routeName.value == 'home' ? 'true' : 'false') })

</script>

<style></style>