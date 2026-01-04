<script setup>
// import DesignSystem from '@/design-system/DesignSystem.vue'
import listDessert from '@/data/data.json'

import CloseButton from './components/CloseButton.vue'
import MenuList from './components/MenuList.vue'

import { ref } from 'vue'
import PrimaryButton from './components/PrimaryButton.vue'

import { useCartStore } from './stores/counter'
import ConfirmationPopup from './components/ConfirmationPopup.vue'

const menu = ref(listDessert)
const cart = useCartStore()
</script>

<template>
  <!-- <DesignSystem></DesignSystem> -->
  <ConfirmationPopup v-if="cart.isOpenConfirmationPage" />
  <div class="section__main">
    <h1>Desserts</h1>
    <MenuList :menu="menu"></MenuList>
    <section class="cart">
      <h2>Your Cart ({{ cart.getCountTotal }})</h2>
      <div class="container__cart">
        <ul>
          <li class="list-item__cart" v-for="item in cart.getItemsCart">
            <div class="font-preset-4-b">
              <p>{{ item.name }}</p>
              <div class="container__item-cart">
                <span class="red-text">{{ item.count }}x</span>
                <span class="font-preset-4-r light-rose-text">
                  <span>@ </span><span>$</span>{{ cart.getPriceItemCart(item) }}
                </span>
                <span class="light-rose-text">
                  <span>$</span>{{ cart.getTotalPriceItemCart(item) }}
                </span>
              </div>
            </div>
            <div>
              <CloseButton :item="item"></CloseButton>
            </div>
            <hr />
          </li>
        </ul>
      </div>
      <div class="container__total-cart">
        <span>Order Total</span>
        <span class="font-preset-2">${{ cart.getAmountTotal }}</span>
      </div>
      <div class="container__message-carbon-neutral">
        <img src="/assets/images/icon-carbon-neutral.svg" alt="icon carbon neurtral" />
        <p class="font-preset-4-r">This is a <b>carbon-neutral</b> delivery</p>
      </div>
      <div class="container__confirm-order">
        <PrimaryButton @click="cart.openConfirmationPage()">Confirm Button</PrimaryButton>
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

/* Cart */

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

b {
  font: var(--font-preset-4-b);
}

ul {
  list-style-type: none;

  display: grid;
  gap: var(--spacing-0100);

  padding: 0;
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
