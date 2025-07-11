<template>
  <nav
    class="navbar flex justify-between items-center py-[10px] px-[20px] bg-white w-full fixed top-0 left-0 z-[1100] gap-[20px]"
  >
    <img
      @click="router.push('/')"
      class="w-[88px] cursor-pointer"
      src="/images/logo-full.png"
      alt="logo"
    />
    <div class="border-[1px] border-solid rounded-full border-[#E0E0E0] w-[100%] h-[40px] input-group">
      <div class="group-span">
        <!-- <i class="fa-solid fa-magnifying-glass"></i> -->
        <img class="cursor-pointer" @click="handleSearch()" width="100%" height="auto" src="/images/magnify-glass.svg" alt="logo">
      </div>
      <input @keyup.enter="handleSearch()" v-model="keyWord" type="text" class="group-controll input-no-focus" placeholder="Search for items">
      <div v-if="keyWord" class="group-span">
        <!-- <i class="fa-solid fa-magnifying-glass"></i> -->
        <img class="cursor-pointer" @click="() => {keyWord = ''}" width="100%" height="auto" src="/images/X-page.svg" alt="logo">
      </div>
    </div>
    <div class="profile flex items-center">
      <div class="text-[16px] text-primary mr-[20px]">{{ userData.name }}</div>
      <img
        :src="userData.image_path? `https://tenth.run.place:90/storage/${userData.image_path}` : 'images/user.png'"
        alt="Profile Picture"
        class="w-[40px] h-[40px] bg-white rounded-full"
      />
    </div>

    <div class="menu-toggle hidden cursor-pointer" @click="toggleMenu">
      <img
        :src="isMenuOpen ? '/images/close-icon.svg' : '/images/menu-icon.svg'"
        alt="Menu Toggle"
      />
    </div>

    <div :class="['mobile-menu', { 'menu-open': isMenuOpen }]">
      <div class="flex justify-between items-center mb-5">
        <div class="flex flex-col items-center mb-[20px]">
          <div class="text-[16px] text-primary">Admin Name</div>
          <img
            src=""
            alt="Profile Picture"
            class="w-[40px] h-[40px] bg-white rounded-full"
          />
        </div>
      </div>
      <div class="flex flex-col flex-grow">
        <router-link
          class="mb-[15px] text-[18px]"
          active-class="text-primary"
          to="/products-admin"
          @click="handleNavigation"
        >
          Products
        </router-link>
        <router-link
          class="mb-[15px] text-[18px]"
          active-class="text-primary"
          to="/category-admin"
          @click="handleNavigation"
        >
          Categories
        </router-link>
        <router-link
          class="mb-[15px] text-[18px]"
          active-class="text-primary"
          to="/brand-admin"
          @click="handleNavigation"
        >
          Brands
        </router-link>
        <router-link
          class="mb-[15px] text-[18px]"
          active-class="text-primary"
          to="/user-role"
          v-if="userData.roles[0].name === 'master'"
          @click="handleNavigation"
        >
          Manage user role
        </router-link>
      </div>
      <button
        class="logout-btn flex items-center text-red mt-auto"
        @click="logout"
      >
        <img src="/images/logout.svg" alt="Logout" class="mr-[10px]" />
        <div class="logout-text">Logout</div>
      </button>
    </div>
  </nav>
  <div
    id="sidebar"
    class="sidebar fixed bg-white w-40 h-full flex flex-col justify-between items-start px-5 box-border text-left text-base font-maitree pt-[70px] pb-[20px] mt-5 z-[1000]"
  >
    <div
      class="w-auto bg-white overflow-hidden flex flex-col items-start gap-5"
    >
      <div
        class="self-stretch bg-white overflow-hidden flex flex-row items-start font-inter"
      >
        <div
          class="self-stretch bg-white overflow-hidden flex flex-col items-start justify-start gap-10"
        >
          <router-link to="/products-admin" active-class="text-primary-1"
            >Products</router-link
          >
          <router-link to="/category-admin" active-class="text-primary-1"
            >Categories</router-link
          >
          <router-link to="/brand-admin" active-class="text-primary-1"
            >Brands</router-link
          >
          <router-link v-if="userData.roles[0].name === 'master'" to="/user-role" active-class="text-primary-1"
            >User Role</router-link
          >
        </div>
      </div>
    </div>
    <button
      class="bg-white overflow-hidden flex flex-row items-center justify-center py-auto mb-[20px] gap-2.5 text-danger"
      @click="store.commit('user/setLogout'); router.push('/')"
    >
      <img
        class="w-5 relative h-[18px]"
        alt="Logout"
        src="/images/logout.svg"
      />
      <div class="relative leading-[13px] text-danger">Logout</div>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const route = useRoute();
const store = useStore()

const userData = computed(() => store.state.user.userData)

const isMenuOpen = ref(false);
const keyWord = ref()

const pushWithPath = (path) => {
  router.push({
    path: path,
    query: {
      ...route.query,
      keyword : keyWord.value
    }
  })
}

const handleSearch = () => {
  if(keyWord.value) {
    if(route.path !== '/') {
      pushWithPath(route.path)
    } else {
      pushWithPath('/products')
    }
  }
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleNavigation = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
.layout-container {
  display: flex;
}

.navbar {
  border-bottom: 0.5px solid #ccc;
  z-index: 1100;
}

.search-bar {
  border: 1px solid #e0e0e0;
}

.sidebar {
  padding-top: 50px;
  left: 0;
  top: 0;
  height: 100%;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.mobile-menu {
  align-items: flex-start;
  display: none;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: white;
  justify-content: space-between;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 70px 20px 20px;
  z-index: 1000;
}

.menu-open {
  display: flex;
}

.logout-btn {
  display: flex;
  align-items: center;
  color: red;
  background: none;
  border: none;
  cursor: pointer;
}

.logout-btn img {
  margin-right: 10px;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .navbar .profile {
    display: none;
  }

  .navbar .search-bar {
    width: 100%;
  }
}

@media (max-width: 1023px) {
  .sidebar {
    display: none;
  }
  .menu-toggle {
    display: block;
  }

  .navbar .profile {
    display: none;
  }

  .navbar .search-bar {
    width: 100%;
  }
}
</style>
