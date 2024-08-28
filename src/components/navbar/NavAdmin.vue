<template>
  <nav class="navbar flex justify-between items-center py-[10px] px-[20px] bg-white w-full fixed">
    <img
      @click="router.push('/')"
      class="w-[88px]"
      src="/images/logo-full.png"
      alt="logo"
    />
    <div class="search-bar flex items-center w-[75%] h-[40px] rounded-full">
      <div class="pl-10px">
        <img src="/images/magnify-glass.svg" alt="Search" />
      </div>
      <input type="text" class="search-input w-full border-none outline-none p-[10px]" placeholder="Search for items" />
    </div>
    <div class="profile flex items-center">
      <div class="text-[16px] text-primary mr-[20px]">Admin Name</div>
      <img src="" alt="Profile Picture" class="w-[40px] h-[40px] bg-white rounded-[50%]" />
    </div>
    <div class="menu-toggle hidden cursor-pointer" @click="toggleSidebar">
      <img src="/images/menu-icon.svg" alt="Menu" />
    </div>

    <div :class="['mobile-menu', { 'menu-open': isSidebarOpen }]">
      <div class="flex justify-between items-center mb-5">
        <div class="mobile-profile">
          <div class="text-[16px] text-primary">Admin Name</div>
          <img src="" alt="Profile Picture" class="w-[40px] h-[40px] bg-white rounded-[50%]" />
        </div>
      </div>
      <div class="mobile-nav">
        <router-link to="/home-admin">Home</router-link>
        <router-link to="/products-admin">Products</router-link>
        <router-link to="/category-admin">Categories</router-link>
        <router-link to="/brand-admin">Brands</router-link>
      </div>
      <button class="logout-btn" @click="logout">
        <img src="/images/logout.svg" alt="Logout" />
        <div class="logout-text">Logout</div>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
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
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 70px 20px 20px;
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
}

.menu-open {
  display: block;
}

.mobile-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  justify-content: end;
}

.mobile-nav a {
  margin-bottom: 15px;
  font-size: 18px;
}

.logout-btn {
  margin-top: auto;
  display: flex;
  align-items: center;
  color: red;
  background: none;
  border: none;
  cursor: pointer;
  margin-top: auto;
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
