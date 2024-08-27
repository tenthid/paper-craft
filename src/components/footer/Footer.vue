<template>
  <div
    class="w-full px-[20px] tablet:px-[40px] laptop:px-[60px] py-[50px] bg-primary flex flex-col gap-10 font-inter"
  >
    <div
      class="flex laptop:flex-row justify-between gap-8 laptop:gap-10 tablet:flex-col phone-l:flex-col"
    >
      <!-- Desc Section -->
      <div class="space-y-4 tablet:space-y-6 max-w-md">
        <div
          class="flex items-center space-x-2 text-white text-[24px] phone-m:text-[26px] tablet:text-[30px] font-bold"
        >
          <div style="display: flex; gap: 0">
            <span>Paper</span>
            <span>Craft</span>
          </div>
        </div>
        <p
          class="text-white text-[14px] phone-m:text-[16px] tablet:text-[14px] text-justify"
        >
          Papercraft menyediakan berbagai perlengkapan alat tulis kantor dan
          bahan kerajinan kertas. Temukan kertas, pensil, pena, dan alat
          papercraft berkualitas tinggi untuk memenuhi kebutuhan kantor dan hobi
          kreatif Anda.
        </p>
      </div>

      <!-- Contact Section -->
      <div class="space-y-2 tablet:space-y-3 mt-6 tablet:mt-0">
        <h3
          class="text-white text-[18px] phone-m:text-[20px] tablet:text-[20px] font-medium"
        >
          Contact
        </h3>
        <p
          class="text-white text-[16px] phone-m:text-[18px] tablet:text-[18px] leading-7"
        >
          Call now:
          <span class="text-gray font-medium">(0361) 555-0115</span>
        </p>
        <p
          class="text-white text-[16px] phone-m:text-[18px] tablet:text-[18px] leading-7"
        >
          Email:
          <span class="text-gray font-medium">papercraft@gmail.com</span>
        </p>
        <p class="text-white text-[14px] leading-tight">
          Jln Singosari Gg.Bebek No.6
        </p>
      </div>

      <!-- Categories Section -->
      <div class="space-y-2 tablet:space-y-4 mt-6 tablet:mt-0">
        <h3
          class="text-white text-[18px] phone-m:text-[20px] tablet:text-[20px] font-medium"
        >
          Categories
        </h3>
        <ul class="space-y-2">
          <li
            class="text-gray text-[14px] phone-m:text-[16px] tablet:text-[16px]"
          >
            <router-link to="/">Alat Tulis</router-link>
          </li>
          <li
            class="text-gray text-[14px] phone-m:text-[16px] tablet:text-[16px]"
          >
            <router-link to="/">Perlengkapan Sekolah</router-link>
          </li>
          <li
            class="text-gray text-[14px] phone-m:text-[16px] tablet:text-[16px]"
          >
            <router-link to="/">Perlengkapan Pramuka</router-link>
          </li>
          <li
            class="text-gray text-[14px] phone-m:text-[16px] tablet:text-[16px]"
          >
            <router-link to="/">Perlengkapan Kantor</router-link>
          </li>
          <li
            class="text-gray text-[14px] phone-m:text-[16px] tablet:text-[16px]"
          >
            <router-link to="/">Perlengkapan Seni</router-link>
          </li>
          <li
            class="text-gray text-[14px] phone-m:text-[16px] tablet:text-[16px]"
          >
            <router-link to="/">Kertas dan Buku</router-link>
          </li>
        </ul>
      </div>

      <!-- Support Section -->
      <div class="space-y-2 tablet:space-y-4 mt-6 tablet:mt-0">
        <h3
          class="text-white text-[18px] phone-m:text-[20px] tablet:text-[20px] font-medium"
        >
          Support
        </h3>
        <ul class="space-y-2">
          <li
            class="text-gray text-[14px] phone-m:text-[16px] tablet:text-[16px]"
          >
            <router-link to="/">Privacy Policy</router-link>
          </li>
          <li
            class="text-gray text-[14px] phone-m:text-[16px] tablet:text-[16px]"
          >
            <router-link to="/">Terms & Conditions</router-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white"></div>

    <!-- Social Media and Copyright Section -->
    <div
      class="flex laptop:flex-row justify-between items-center space-y-4 laptop:space-y-0 phone-s:flex-col phone-l:flex-col"
    >
      <p class="text-white text-[16px] phone-m:text-[18px] tablet:text-[20px]">
        © 2024 Papercraft
      </p>
      <div
        class="flex flex-wrap justify-center laptop:justify-end space-x-2 laptop:space-x-4 mt-4 laptop:mt-0"
      >
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
