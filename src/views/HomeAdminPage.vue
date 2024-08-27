<template>
  <div class="bg-primary-background pt-[50px] w-full container-page">
    <div
      class="pt-[100px] w-full relative bg-primaryy-background overflow-hidden flex flex-row items-start justify-start py-2.5 px-5 box-border gap-5 text-left text-sm text-black-100 font-regular"
    >
      <!-- Top Selling Products -->
      <div
        class="w-[587px] bg-white flex flex-col p-6 box-border text-[20px] text-[#000] font-inter"
      >
        <div class="flex flex-col gap-6 font-inter">
          <div class="font-semibold">Top Selling Products</div>
          <div class="flex flex-col gap-[15px] text-sm">
            <div class="w-[539px] relative h-[18px] text-gray">
              <div class="absolute left-[0px] font-medium">Product name</div>
              <div class="absolute left-[150px] font-medium">Price</div>
              <div class="absolute left-[300px] font-medium">Sold</div>
              <div class="absolute left-[420px] font-medium">Sales</div>
            </div>
            <div
              class="w-[540px] relative border-gray border-t-[1px] border-solid box-border h-px"
            ></div>
            <div
              v-for="product in topSellingProducts"
              :key="product.name"
              class="w-[539px] relative h-6"
            >
              <div class="absolute left-[0px] flex items-center gap-2">
                <img
                  class="w-6 h-6 rounded-xl"
                  :src="product.image"
                  :alt="product.name"
                />
                <div>{{ product.name }}</div>
              </div>
              <div class="absolute left-[150px]">{{ product.price }}</div>
              <div class="absolute left-[300px]">{{ product.sold }}</div>
              <div class="absolute left-[420px]">{{ product.sales }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Latest Transactions -->
      <div
        class="w-[555px] bg-white flex flex-col p-6 box-border text-[20px] text-[#000] font-inter"
      >
        <div class="flex flex-col gap-6 font-inter">
          <div class="font-medium">Latest Transactions</div>
          <div class="flex flex-col gap-[15px] text-sm">
            <div class="w-[500px] relative h-[18px] text-gray">
              <div class="absolute left-[0px] font-medium">Customer</div>
              <div class="absolute left-[147px] font-medium">Product</div>
              <div class="absolute left-[271px] font-medium">Brand</div>
              <div class="absolute left-[378px] font-medium">Qty</div>
            </div>
            <div
              class="w-[411px] relative border-gray border-t-[1px] border-solid box-border h-px"
            ></div>
            <div
              v-for="transaction in latestTransactions"
              :key="transaction.customer + transaction.product"
              class="w-[507px] relative h-6"
            >
              <div class="absolute left-[0px]">{{ transaction.customer }}</div>
              <div class="absolute left-[147px]">{{ transaction.product }}</div>
              <div class="absolute left-[271px]">{{ transaction.brand }}</div>
              <div class="absolute left-[378px] text-dimgray">
                {{ transaction.qty }} pc
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const topSellingProducts = [
  {
    name: "Tas Ransel",
    price: "Rp 200.000",
    sold: 2,
    sales: "Rp 400.000",
    image: "/images/tas.jpg",
  },
  {
    name: "Tas Ransel",
    price: "Rp 200.000",
    sold: 2,
    sales: "Rp 400.000",
    image: "/images/tas.jpg",
  },
  {
    name: "Tas Ransel",
    price: "Rp 200.000",
    sold: 2,
    sales: "Rp 400.000",
    image: "/images/tas.jpg",
  },
  {
    name: "Tas Ransel",
    price: "Rp 200.000",
    sold: 2,
    sales: "Rp 400.000",
    image: "/images/tas.jpg",
  },
  {
    name: "Tas Ransel",
    price: "Rp 200.000",
    sold: 2,
    sales: "Rp 400.000",
    image: "/images/tas.jpg",
  },
];

const latestTransactions = [
  {
    customer: "Jiyestha",
    product: "Tas Ransel",
    brand: "Eiger",
    qty: 1,
  },
  {
    customer: "Jiyestha",
    product: "Tas Ransel",
    brand: "Eiger",
    qty: 1,
  },
  {
    customer: "Jiyestha",
    product: "Tas Ransel",
    brand: "Eiger",
    qty: 1,
  },
  {
    customer: "Jiyestha",
    product: "Tas Ransel",
    brand: "Eiger",
    qty: 1,
  },
  {
    customer: "Jiyestha",
    product: "Tas Ransel",
    brand: "Eiger",
    qty: 1,
  },
];
</script>
