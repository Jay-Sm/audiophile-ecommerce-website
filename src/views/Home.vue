<template>
  <div class="flex flex-col items-center">
    <div class="max-w-[120rem] px-[11.5rem] min-w-0 w-full mt-[8rem]">
      <div class="flex flex-row justify-between gap-[4rem]">

        <div class="w-full flex flex-col items-center">
          <div class="-mb-[8rem] relative z-10">
            <img class="h-[12rem] max-w-fit" src="../assets/images/shared/desktop/image-headphones.png" alt="">
          </div>
          <div class="w-full min-w-fit px-6 pb-[2rem] pt-[8rem] bg-theme-gray rounded-lg flex flex-col items-center">
            <p class="font-bold text-lg tracking-wider">{{ "Headphones".toUpperCase() }}</p>
            <router-link :to="{ name: 'headphones' }"
              class="transition-colors duration-[250ms] text-[#0000008c] hover:text-theme-orange2 flex flex-row items-center gap-x-3 mt3">
              <p class="font-semibold text-sm">{{ "Shop".toUpperCase() }}</p>
              <img src="../assets/images/shared/desktop/icon-arrow-right.svg" class="max-w-fit max-h-fit w-fit h-fit">
            </router-link>
          </div>
        </div>

        <div class="w-full flex flex-col items-center">
          <div class="-mb-[8rem] relative z-10">
            <img class="h-[12rem] max-w-fit" src="../assets/images/shared/desktop/image-speakers.png" alt="">
          </div>
          <div class="w-full min-w-fit px-6 pb-[2rem] pt-[8rem] bg-theme-gray rounded-lg flex flex-col items-center">
            <p class="font-bold text-lg tracking-wider">{{ "Speakers".toUpperCase() }}</p>
            <router-link :to="{ name: 'speakers' }"
              class="transition-colors duration-[250ms] text-[#0000008c] hover:text-theme-orange2 flex flex-row items-center gap-x-3 mt3">
              <p class="font-semibold text-sm">{{ "Shop".toUpperCase() }}</p>
              <img src="../assets/images/shared/desktop/icon-arrow-right.svg" class="max-w-fit max-h-fit w-fit h-fit">
            </router-link>
          </div>
        </div>

        <div class="w-full flex flex-col items-center">
          <div class="-mb-[8rem] relative z-10">
            <img class="h-[12rem] max-w-fit" src="../assets/images/shared/desktop/image-earphones.png" alt="">
          </div>
          <div class="w-full min-w-fit px-6 pb-[2rem] pt-[8rem] bg-theme-gray rounded-lg flex flex-col items-center">
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
        class="px-[2rem] mt-[8rem] h-[30rem] bg-theme-orange2 rounded-lg home-speaker-zx9 flex flex-row justify-center gap-x-[8rem] overflow-hidden">
        <div class="h-full flex items-end">
          <img class="h-[27rem] min-w-[22.2rem] mb-[-0.5px]" src="../assets/images/home/desktop/image-speaker-zx9.png" alt="">
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

      <div
        class="my-[4rem] h-[20rem] pl-[6rem] bg-theme-gray home rounded-lg overflow-hidden home-speaker-zx7">
        <div class="h-full flex flex-col justify-center gap-y-5">
          <h2>{{ "ZX7 Speaker".toUpperCase() }}</h2>
          <div class="max-w-fit min-h-fit flex mt-2">
            <router-link :to="{ name: 'speakers' }"
              class="!rounded-none border to-product hover:bg-black hover:text-white transition-all">
              {{ "See Product".toUpperCase() }}
            </router-link>
          </div>
        </div>
      </div>

      <div class="h-[21rem] flex gap-x-7 mb-[8rem]">
        <div
          class="w-full h-full flex flex-col justify-center gap-y-5 bg-theme-gray rounded-md overflow-hidden home-earphones">

        </div>
        <div
          class="w-full h-full flex flex-col justify-center gap-y-5 bg-theme-gray rounded-md overflow-hidden pl-[7rem]">
          <h2>{{ "YX1 Earphones".toUpperCase() }}</h2>
          <div class="max-w-fit min-h-fit flex mt-2">
            <router-link :to="{ name: 'speakers' }"
              class="!rounded-none border to-product hover:bg-black hover:text-white transition-all">
              {{ "See Product".toUpperCase() }}
            </router-link>
          </div>
        </div>
      </div>

      <div class="mb-[8rem] flex justify-between items-center">
        <div>
          <h3 class="mb-9">BRINGING YOU THE <span>BEST</span> AUDIO GEAR</h3>
          <p class="max-w-[33.4rem] text-[#00000080] leading-6">
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones,
            speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to
            browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div>
          <img class="rounded-md" src="../assets/images/shared/desktop/image-best-gear.jpg" alt="">
        </div>
      </div>
    </div>

  </div>
</template>
<script setup>

</script>

<style></style>