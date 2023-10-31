<template>
  <div class="h-screen px-[11.5rem] text-white hero overflow-y-hidden">
    <header>
      <div class="flex flex-row justify-between py-9 select-none">
        <router-link :to="{ name: 'home' }">
          <img class="min-w-fit" src="../assets/images/shared/desktop/logo.svg" alt="">
        </router-link>
        <nav class="text-[13px]">
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
            <svg width="23" height="20" xmlns="http://www.w3.org/2000/svg" class="cart-icon-desktop">
              <path
                d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
                fill-rule="nonzero" />
            </svg>
          </button>
        </div>
      </div>

      <div class="h-[0.5px] bg-[#ffffff5b]"></div>
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

  <div class="pt-[8rem] px-[11.5rem]">
    <div class="flex flex-row justify-between">

      <div class="flex flex-col items-center">
        <div class="-mb-[8rem] relative z-10">
          <img class="h-[12rem] max-w-fit" src="../assets/images/shared/desktop/image-headphones.png" alt="">
        </div>
        <div class="px-[8.5rem] pb-[2rem] pt-[8rem] bg-theme-gray rounded-lg flex flex-col items-center">
          <p class="font-bold text-lg tracking-wider">{{ "Headphones".toUpperCase() }}</p>
          <router-link :to="{ name: 'headphones' }"
            class="transition-colors duration-[250ms] text-[#0000008c] hover:text-theme-orange2 flex flex-row items-center gap-x-3 mt3">
            <p class="font-semibold text-sm">{{ "Shop".toUpperCase() }}</p>
            <img src="../assets/images/shared/desktop/icon-arrow-right.svg" class="max-w-fit max-h-fit w-fit h-fit">
          </router-link>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <div class="-mb-[8rem] relative z-10">
          <img class="h-[12rem] max-w-fit" src="../assets/images/shared/desktop/image-speakers.png" alt="">
        </div>
        <div class="px-[8.5rem] pb-[2rem] pt-[8rem] bg-theme-gray rounded-lg flex flex-col items-center">
          <p class="font-bold text-lg tracking-wider">{{ "Speakers".toUpperCase() }}</p>
          <router-link :to="{ name: 'speakers' }"
            class="transition-colors duration-[250ms] text-[#0000008c] hover:text-theme-orange2 flex flex-row items-center gap-x-3 mt3">
            <p class="font-semibold text-sm">{{ "Shop".toUpperCase() }}</p>
            <img src="../assets/images/shared/desktop/icon-arrow-right.svg" class="max-w-fit max-h-fit w-fit h-fit">
          </router-link>
        </div>
      </div>

      <div class="flex flex-col items-center">
        <div class="-mb-[8rem] relative z-10">
          <img class="h-[12rem] max-w-fit" src="../assets/images/shared/desktop/image-earphones.png" alt="">
        </div>
        <div class="px-[8.5rem] pb-[2rem] pt-[8rem] bg-theme-gray rounded-lg flex flex-col items-center">
          <p class="font-bold text-lg tracking-wider">{{ "Earphones".toUpperCase() }}</p>
          <router-link :to="{ name: 'earphones' }"
            class="transition-colors duration-[250ms] text-[#0000008c] hover:text-theme-orange2 flex flex-row items-center gap-x-3 mt3">
            <p class="font-semibold text-sm">{{ "Shop".toUpperCase() }}</p>
            <img src="../assets/images/shared/desktop/icon-arrow-right.svg" class="max-w-fit max-h-fit w-fit h-fit">
          </router-link>
        </div>
      </div>
    </div>

    <div
      class="pl-[8rem] mt-[8rem] w-full h-[30rem] bg-theme-orange2 rounded-lg home-speaker-zx9 flex flex-row gap-x-[8rem] overflow-hidden">
      <div class="h-full flex items-end">
        <img class="h-[90%] mb-[-0.5px]" src="../assets/images/home/desktop/image-speaker-zx9.png" alt="">
      </div>
      <div class="flex flex-col justify-center text-white w-[21rem] gap-y-5">
        <h1>{{ "ZX9 Speaker".toUpperCase() }}</h1>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        <div class="bg-white max-w-fit min-h-fit rounded-sm flex mt-4">
          <router-link :to="{ name: 'speakers' }" class="bg-black to-product hover:opacity-80 transition-opacity">
            {{ "See Product".toUpperCase() }}
          </router-link>
        </div>
      </div>
    </div>

    <div class="my-[4rem] w-full h-[20rem] pl-[6rem] bg-theme-gray home rounded-lg overflow-hidden home-speaker-zx7">
      <div class="h-full flex flex-col justify-center gap-y-5">
        <h2>{{ "ZX7 Speaker".toUpperCase() }}</h2>
        <div class="max-w-fit min-h-fit flex mt-2">
          <router-link :to="{ name: 'speakers' }" class="!rounded-none border to-product hover:opacity-80 transition-opacity">
            {{ "See Product".toUpperCase() }}
          </router-link>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>

</script>

<style></style>