<template>
  <nav
    class="navbar flex justify-between items-center py-[10px] px-[20px] bg-white w-full fixed"
  >
    <img
      @click="router.push('/')"
      class="w-[88px] cursor-pointer"
      src="/images/logo-full.png"
      alt="logo"
    />
    <div
      class="search-bar flex items-center w-[75%] h-[40px] rounded-full border border-gray"
    >
      <div class="pl-[10px]">
        <img src="/images/magnify-glass.svg" alt="Search" />
      </div>
      <input
        type="text"
        class="search-input w-full border-none outline-none p-[10px]"
        placeholder="Search for items"
      />
    </div>
    <div class="profile flex items-center">
      <div class="text-[16px] text-primary mr-[20px]">Admin Name</div>
      <img
        src=""
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
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleNavigation = () => {
  isMenuOpen.value = false;
};

const logout = () => {
  localStorage.removeItem("authToken");
  router.push("/login");
};
</script>

<style scoped>
.navbar {
  border-bottom: 0.5px solid #ccc;
  z-index: 9999;
}

.search-bar {
  border: 1px solid #e0e0e0;
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
  transition: transform 0.3s ease-in-out;
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
</style>
