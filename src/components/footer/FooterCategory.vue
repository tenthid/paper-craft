   <template>
    <ul class="space-y-3">
      <router-link v-for="(item, index) in menuItems" :key="index" :to="item.link">
        <li class="text-gray text-[16px] tablet:text-[16px] mb-2 hover:text-white">
          {{ item.name }}
        </li>
      </router-link>
    </ul>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const menuItems = ref([
    { name: 'Alat Tulis', link: '/' },
    { name: 'Kertas dan Buku', link: '/' },
    { name: 'Perlengkapan Sekolah', link: '/' },
    { name: 'Perlengkapan Pramuka', link: '/' },
    { name: 'Perlengkapan Seni', link: '/' },
    { name: 'Perlengkapan Kantor', link: '/' },

  ]);
  </script> 
  
  <style lang="scss" scoped>
  
  </style>