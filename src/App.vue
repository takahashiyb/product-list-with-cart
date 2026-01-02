<script setup>
// import DesignSystem from '@/design-system/DesignSystem.vue'
import listDessert from '@/data/data.json'

import AddToCartButton from './components/AddToCartButton.vue'
import CloseButton from './components/CloseButton.vue'

import { ref } from 'vue'
import PrimaryButton from './components/PrimaryButton.vue'

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
      <div class="container__cart">
        <ul>
          <li class="list-item__cart">
            <div class="font-preset-4-b">
              <p>Classic Tiramisu</p>
              <div class="container__item-cart">
                <span class="red-text">1x</span>
                <span class="font-preset-4-r light-rose-text">
                  <span>@ </span><span>$</span>5.50
                </span>
                <span class="light-rose-text"> <span>$</span>5.50 </span>
              </div>
            </div>
            <div>
              <CloseButton></CloseButton>
            </div>
            <hr />
          </li>
        </ul>
      </div>
      <div class="container__total-cart">
        <span>Order Total</span>
        <span class="font-preset-2">$46.50</span>
      </div>
      <div class="container__message-carbon-neutral">
        <img src="/assets/images/icon-carbon-neutral.svg" alt="icon carbon neurtral" />
        <p class="font-preset-4-r">This is a <b>carbon-neutral</b> delivery</p>
      </div>
      <div class="container__confirm-order">
        <PrimaryButton>Confirm Button</PrimaryButton>
      </div>
    </section>
  </div>
</template>

<style scoped>
.section__main {
  display: grid;
  gap: var(--spacing-0400);

  padding: var(--spacing-0300);
}

/* Menu */

.container__add-to-cart {
  padding-bottom: var(--spacing-0500);
}

.container__img {
  width: 100%;
  position: relative;
  display: grid;
  justify-content: center;
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

.menu-item-price {
  font: var(--font-preset-3);
  color: hsl(var(--red-color));
}

/* Cart */
.cart {
  display: grid;
  gap: var(--spacing-0300);
  padding: var(--spacing-0300);
}

.list-item__cart {
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
}

.container__item-cart {
  display: flex;
  gap: var(--spacing-0050);
}

.container__total-cart {
  display: flex;
  justify-content: space-between;
}

.container__message-carbon-neutral {
  display: flex;
  justify-content: center;
  gap: var(--spacing-0050);
}

.container__confirm-order {
  display: grid;
}

/* Main */
h1 {
  font: var(--font-preset-1);
}

h2 {
  font: var(--font-preset-2);
  color: hsl(var(--red-color));
}

h3 {
  font: var(--font-preset-4-r);
  color: hsl(var(--rose-500-color));
}

h4 {
  font: var(--font-preset-3);
}

b {
  font: var(--font-preset-4-b);
}

ul {
  list-style-type: none;

  display: grid;
  gap: var(--spacing-0100);

  padding: 0;
}

hr {
  height: 1px;
  width: 100%;
  margin: 0;
  margin-top: var(--spacing-0100);
}

.font-preset-2 {
  font: var(--font-preset-2);
}

.font-preset-4-b {
  font: var(--font-preset-4-b);
}

.font-preset-4-r {
  font: var(--font-preset-4-r);
}

.red-text {
  color: hsl(var(--red-color));
}

.light-rose-text {
  color: hsl(var(--rose-500-color));
}
</style>
