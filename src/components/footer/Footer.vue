<template>
  <div
    class="max-w-screen-[100%] px-[60px] py-[70px] bg-primary flex flex-col gap-10 font-inter"
  >
    <div class="flex flex-col tablet:flex-row justify-between">
      <!-- Desc Section -->
      <div class="space-y-6">
        <div
          class="flex items-center space-x-2 text-white text-[30px] tablet:text-[30px] font-bold"
        >
          <div style="display: flex; gap: 0">
            <span>Paper</span>
            <span>Craft</span>
          </div>
        </div>
        <p
          class="text-white text-[14px] tablet:text-[14px] max-w-md text-justify mr-5"
        >
          Papercraft menyediakan berbagai perlengkapan alat tulis kantor dan
          bahan kerajinan kertas. Temukan kertas, pensil, pena, dan alat
          papercraft berkualitas tinggi untuk memenuhi kebutuhan kantor dan hobi
          kreatif Anda.
        </p>
      </div>

      <!-- Contact Section -->
      <div class="space-y-3 mt-6 tablet:mt-0 mr-5">
        <h3 class="text-white text-[20px] tablet:text-[20px] font-medium">
          Contact
        </h3>
        <p class="text-white text-[18px] tablet:text-[18px] leading-7">
          Call now:
          <span class="text-gray font-medium">(0361) 555-0115</span>
        </p>
        <p class="text-white text-[18px] tablet:text-[18px] leading-7">
          Email:
          <span class="text-gray font-medium">papercraft@gmail.com</span>
        </p>
        <p class="text-white text-[14px] leading-tight">
          Jln Singosari Gg.Bebek No.6
        </p>
      </div>

      <!-- Categories Section -->
      <div class="space-y-4 mt-6 tablet:mt-0 ">
        <h3 class="text-white text-[20px] tablet:text-[20px] font-medium mr-5">
          Categories
        </h3>
        <ul class="space-y-3">
          <router-link to="/">
            <li class="text-gray text-[16px] tablet:text-[16px] mb-2">
              Alat Tulis
            </li>
          </router-link>
          <router-link to="/">
            <li class="text-gray text-[16px] tablet:text-[16px] mb-2">
              Perlengkapan Sekolah
            </li>
          </router-link>
          <router-link to="/">
            <li class="text-gray text-[16px] tablet:text-[16px] mb-2">
              Perlengkapan Pramuka
            </li>
          </router-link>
          <router-link to="/">
            <li class="text-gray text-[16px] tablet:text-[16px] mb-2">
              Perlengkapan Kantor
            </li>
          </router-link>
          <router-link to="/">
            <li class="text-gray text-[16px] tablet:text-[16px] mb-2">
              Perlengkapan Seni
            </li>
          </router-link>
          <router-link to="/">
            <li class="text-gray text-[16px] tablet:text-[16px] mb-2">
              Kertas dan Buku
            </li>
          </router-link>
        </ul>
      </div>

      <!-- Support Section -->
      <div class="space-y-4 mt-6 tablet:mt-0">
        <h3 class="text-white text-[20px] tablet:text-[20px] font-medium">
          Support
        </h3>
        <ul class="space-y-1">
          <router-link to="/">
            <li class="text-gray text-[16px] tablet:text-[16px] mb-2">
              Privacy Policy
            </li>
          </router-link>
          <router-link to="/">
            <li class="text-gray text-[16px] tablet:text-[16px]">
              Terms & Conditions
            </li>
          </router-link>
        </ul>
      </div>
    </div>

    <div class="border-t border-white"></div>

    <div class="flex flex-col tablet:flex-row justify-between items-center">
      <p class="text-white text-[20px] md:text-[20px]">© 2024 Papercraft</p>
      <div
        class="flex flex-wrap tablet:flex-nowrap space-x-2 tablet:space-x-4 space-y-2 tablet:space-y-0 mt-4 tablet:mt-0"
      >
        <!-- Social Media Icons with Links -->
        <a
          href="https://www.facebook.com"
          target="_blank"
          class="flex items-center justify-center"
        >
          <img
            src="/images/fb-logo.svg"
            alt="Facebook"
            class="w-[20px] h-[30px]"
          />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          class="flex items-center justify-center"
        >
          <img
            src="/images/ytb-logo.svg"
            alt="YouTube"
            class="w-[30px] h-[30px]"
          />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          class="flex items-center justify-center"
        >
          <img
            src="/images/ig-logo.svg"
            alt="Instagram"
            class="w-[30px] h-[30px]"
          />
        </a>
        <a
          href="https://x.com"
          target="_blank"
          class="flex items-center justify-center"
        >
          <img
            src="/images/tweeter-logo.svg"
            alt="Twitter"
            class="w-[30px] h-[30px]"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
