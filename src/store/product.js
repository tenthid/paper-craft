import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      apiUrl: import.meta.env.VITE_API_URL,

      pagination: {},

      products: [],

      newestProducts: [],

      popularProducts: [],

      product: {},

      brands: [],

      categories: [],
    };
  },

  mutations: {
    setProductsData(state, payload) {
      state.products = payload;
    },

    addProduct(state, newProduct) {
      state.products.push(newProduct);
    },

    setPaginationData(state, payload) {
      state.pagination = payload;
    },

    setBrandsData(state, payload) {
      state.brands = payload;
    },
    addBrand(state, newBrand) {
      state.brands.push(newBrand);
    },

    setCategoriesData(state, payload) {
      console.log("Setting categories in state:", payload);
      state.categories = payload;
    },

    addCategory(state, newCategory) {
      state.categories.push(newCategory);
    },

    setProductDetailData(state, payload) {
      state.product = payload;
    },

    setNewestProductsData(state, payload) {
      state.newestProducts = payload;
    },

    setPopularProductsData(state, payload) {
      state.popularProducts = payload;
    },
  },

  getters: {
    formatToIdr: () => (price) => {
      return Number(price).toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
      });
    },
    productsLength: (state) => {
      return state.products.length;
    },
  },

  actions: {
    async getProducts({ commit, state }, payload) {
      try {
        let api = `${state.apiUrl}products`;
        let queries = payload !== undefined && payload !== null ? payload : {};
        if (Object.keys(queries).length !== 0) {
          api = `${api}?${payload}`;
          console.log(api);
        }
        const { data } = await axios.get(api);
        commit("setProductsData", data.data);
        let pagination = { ...data };
        delete pagination.data;
        commit("setPaginationData", pagination);
      } catch (err) {
        console.log(err);
        commit("setProductsData", []);
        commit("setPaginationData", {});
      }
    },

    async createProduct({ state }, formData) {
      try {
        const apiUrl = `${state.apiUrl}products`;
        const response = await axios.post(apiUrl, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${state.token}`
          },
          withCredentials: true
        });
        return response.data;
      } catch (err) {
        console.error("Error creating product:", err.response ? err.response.data : err.message);
        throw err;
      }
    },

    async getBrands({ commit, state }) {
      try {
        let api = `${state.apiUrl}brands`;
        const { data } = await axios.get(api);
        commit("setBrandsData", data.data);
      } catch (err) {
        console.log(err);
        commit("setBrandsData", []);
      }
    },

    async createBrand({ commit, state }, brand) {
      try {
        const apiUrl = `${state.apiUrl}brands`;
        const response = await axios.post(apiUrl, brand, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${state.token}`
          },
          withCredentials: true
        });
        commit("addBrand", response.data);
      } catch (error) {
        console.error("Error creating brand:", error.response ? error.response.data : error.message);
        throw error;
      }
    },

    async deleteBrand({ commit, state }, id) {
      try {
        const apiUrl = `${state.apiUrl}brands/${id}`;
        await axios.delete(apiUrl, {
          headers: {
            "Authorization": `Bearer ${state.token}`
          },
          withCredentials: true
        });
        commit("setBrandsData", state.brands.filter(brand => brand.id !== id));
      } catch (error) {
        console.error("Error deleting brand:", error.response ? error.response.data : error.message);
        throw error;
      }
    },

    async getCategories({ commit, state }, payload) {
      try {
        let api = `${state.apiUrl}categories`;
        const { data } = await axios.get(api);
        // console.log("Categories fetched from API:", data.data);
        commit("setCategoriesData", data.data);
      } catch (err) {
        // console.log("Error fetching categories:", err);
        commit("setCategoriesData", []);
      }
    },

    async createCategory({ commit, state }, category) {
      try {
        const apiUrl = `${state.apiUrl}categories`;
        const response = await axios.post(apiUrl, category, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${state.token}`
          },
          withCredentials: true
        });
        console.log("Response from server:", response.data);
        commit("addCategory", response.data);
        await this.dispatch("getCategories");
      } catch (error) {
        console.error("Error creating category:", error.response ? error.response.data : error.message);
      }
    },
    
    async getProductDetail({ state, commit }, payload) {
      try {
        let api = `${state.apiUrl}products/${payload}`;
        const { data } = await axios.get(api);
        // console.log(data.product[0])
        commit("setProductDetailData", data.product[0]);
      } catch (err) {
        console.log(err);
        commit("setProductDetailData", {});
      }
    },

    async getNewest({ state, commit }) {
      try {
        let api = `${state.apiUrl}products?orderBy=created_at&sortBy=desc&perPage=5`;
        const { data } = await axios.get(api);
        commit("setNewestProductsData", data.data);
      } catch (err) {
        console.log(err);
        commit("setNewestProductsData", []);
      }
    },

    async getPopular({ state, commit }) {
      try {
        let api = `${state.apiUrl}products?orderBy=created_at&sortBy=desc&perPage=5`;
        const { data } = await axios.get(api);
        commit("setPopularProductsData", data.data);
      } catch (err) {
        console.log(err);
        commit("setPopularProductsData", []);
      }
    },
  },
};
