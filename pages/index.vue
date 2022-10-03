<template>
      <main>
        <img class="bg--svg" src="/bg.svg" />
        <section class="home--body">
          <div class="cto--container container px-4 min-h-screen">
            <div class="cat--title flex justify-between items-center">
              <h4 class="text-2xl">Top Stores</h4>
              <nif-btn>
                View All
                <img class="ml-2" src="/arrow-right.svg" alt="">
              </nif-btn>
            </div>
            <top-stores-grid />
            <div class="cat--title mt-20 flex justify-between items-center">
              <h4 class="text-2xl">Browse Event Collections</h4>
              <nif-btn>
                View All
                <img class="ml-2" src="/arrow-right.svg" alt="">
              </nif-btn>
            </div>
            <event-collection-grid />
            <div class="cat--title mt-20 flex justify-between items-center">
              <h4 class="text-2xl">Popular Collections</h4>
              <nif-btn>
                View All
                <img class="ml-2" src="/arrow-right.svg" alt="">
              </nif-btn>
            </div>
            <collection-grid />
            <div class="cat--title mt-20 flex justify-between items-center">
              <h4 class="text-2xl">Trending Now</h4>
              <div class="cat--grid">
                <select class="select w-full">
                  <option selected>Most Popular</option>
                  <option>Trending</option>
                  <option>Downloads</option>
                </select>
                <select class="select w-full">
                  <option selected>Category</option>
                  <option>Homer</option>
                  <option>Marge</option>
                </select>
                <select class="select w-full">
                  <option selected>Last 7 days</option>
                  <option>Homer</option>
                  <option>Marge</option>
                </select>
                <select class="select w-full">
                  <option selected>Price Range</option>
                  <option>Homer</option>
                  <option>Marge</option>
                </select>
              </div>
            </div>
            <event-card-grid />
          </div>
        </section>
      </main>
</template>
<script setup>
definePageMeta({
  layout: "landing",
});
</script>
