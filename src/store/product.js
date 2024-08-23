export default {
    namespaced: true,
    state () {
        return {
            products: [
                {
                  name: "This Product name bla bla ba ",
                  brand: "Brand name",
                  price: "Rp200.000",
                  stock: 11,
                  image: "/images/tas.jpg",
                },
                {
                  name: "This Product name bla bla ba ball",
                  brand: "Brand name",
                  price: "Rp200.000",
                  stock: 11,
                  image: "/images/tas.jpg",
                },
                {
                  name: "This Product name bla bla ba ball",
                  brand: "Brand name",
                  price: "Rp200.000",
                  stock: 11,
                  image: "/images/tas.jpg",
                },
                {
                  name: "This Product name bla bla ba ball",
                  brand: "Brand name",
                  price: "Rp200.000",
                  stock: 11,
                  image: "/images/tas.jpg",
                },
                {
                  name: "This Product name bla bla ba ball",
                  brand: "Brand name",
                  price: "Rp200.000",
                  stock: 11,
                  image: "/images/tas.jpg",
                },
            ],
            brands: [
                {
                  brandName: 'brand 1',
                },
                {
                  brandName: 'brand 2',
                },
                {
                  brandName: 'brand 3',
                },
              ],
              categories: [
                {
                  categoryName: 'category 1',
                },
                {
                  categoryName: 'category 2',
                },
                {
                  categoryName: 'category 3',
                },
                
            ]
        }
    },

    mutations: {

    },

    getters: {
      formatToIdr: () => (price) => {
        return price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0, minimumFractionDigits: 0 })
    }
    },

    actions: {

    }
}