<script setup>
// import DesignSystem from '@/design-system/DesignSystem.vue'
import listDessert from '@/data/data.json'

import AddToCartButton from './components/AddToCartButton.vue'

import { ref } from 'vue'

const menu = ref(listDessert)

console.log(menu)
</script>

<template>
  <!-- <DesignSystem></DesignSystem> -->
  <div class="section__main">
    <h1>Desserts</h1>
    <section class="menu">
      <ul>
        <li v-for="item in menu" :key="item.name">
          <div class="container__add-to-cart">
            <div class="container__img">
              <picture>
                <source :srcset="`${item.image.desktop}`" media="(min-width:62.5em)" />
                <source :srcset="`${item.image.tablet}`" media="(min-width:43.75em)" />
                <img :src="`${item.image.mobile}`" />
              </picture>
              <div class="container__button-add-to-cart">
                <AddToCartButton></AddToCartButton>
              </div>
            </div>
          </div>
          <h3>{{ item.category }}</h3>
          <h4>
            {{ item.name }}
          </h4>
          <p class="menu-item-price"><span>$</span>{{ item.price.toFixed(2) }}</p>
        </li>
      </ul>
    </section>
    <section class="cart">
      <h2>Your Cart (7)</h2>
      <div class="container__cart"></div>
    </section>
  </div>
</template>

<style scoped>
.section__main {
  display: grid;
  gap: var(--spacing-0400);

  padding: var(--spacing-0300);
}

h1 {
  font: var(--font-preset-1);
  color: hsl(var(--rose-900-color));
}

ul {
  list-style-type: none;

  display: grid;
  gap: var(--spacing-0300);

  padding: 0;
}

.container__add-to-cart {
  padding-bottom: var(--spacing-0500);
}

.container__img {
  width: 100%;
  position: relative;
}

.container__img img {
  height: 100%;
  object-fit: contain;

  border-radius: 8px;
}

.container__button-add-to-cart {
  position: absolute;
  bottom: 0;
  left: 50%;
  translate: -50% 50%;
}

h3 {
  font: var(--font-preset-4);
  color: hsl(var(--rose-500-color));
}

h4 {
  font: var(--font-preset-3);
  color: hsl(var(--rose-900-color));
}

.menu-item-price {
  font: var(--font-preset-3);
  color: hsl(var(--red-color));
}
</style>
