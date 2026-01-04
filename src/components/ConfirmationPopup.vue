<script setup>
import PrimaryButton from './PrimaryButton.vue'

import { useCartStore } from '@/stores/counter'

const cart = useCartStore()
</script>
<template>
  <div class="overlay">
    <div class="popup__order-confirmation">
      <div class="popup" v-if="cart.isCartEmpty">
        <div class="header-popup-empty">
          <div class="container__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 10 10"
            >
              <path
                fill="red"
                d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
              />
            </svg>
          </div>
          <h2>No Orders</h2>
          <p>Please click the button below to start again</p>
        </div>

        <div class="container__button-start_new">
          <PrimaryButton @click="cart.closeConfirmationPage()">Start New Order</PrimaryButton>
        </div>
      </div>
      <div class="popup" v-else>
        <div>
          <div class="container__icon">
            <img src="/assets/images/icon-order-confirmed.svg" alt="" />
          </div>
          <h1>Order Confirmed</h1>
          <p class="light-rose-text">We hope you enjoy your food!</p>
        </div>
        <div class="list-order">
          <ul>
            <li class="list-item__cart" v-for="item in cart.getItemsCart">
              <div class="container__img-item">
                <img :src="item.image.thumbnail" />
              </div>
              <div class="font-preset-4-b">
                <p class="item-name">{{ item.name }}</p>
                <div class="container__item-cart">
                  <span class="red-text">{{ item.count }}x</span>
                  <span class="font-preset-4-r light-rose-text">
                    <span>@ </span><span>$</span>{{ cart.getPriceItemCart(item) }}
                  </span>
                </div>
              </div>
              <span class="font-preset-3">
                <span>$</span>{{ cart.getTotalPriceItemCart(item) }}
              </span>
              <hr />
            </li>
          </ul>
          <div class="container__order-total">
            <p>Order Total</p>
            <span class="font-preset-2">${{ cart.getAmountTotal }}</span>
          </div>
        </div>
        <div class="container__button-start_new">
          <PrimaryButton @click="cart.$reset()">Start New Order</PrimaryButton>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.overlay:before {
  content: '';
  position: fixed;
  z-index: 1;

  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 50%;
}

.popup {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-0400);

  height: 100%;

  padding: var(--spacing-0300);
  padding-top: var(--spacing-0500);
}

.header-popup-empty {
  flex: 1;
}

.popup__order-confirmation {
  position: fixed;
  bottom: 0;
  z-index: 2;

  height: 90%;
  width: 100%;
  background-color: hsl(var(--white-color));

  border-radius: 12px;
}

.container__icon {
  padding-bottom: var(--spacing-0300);
}

.list-order {
  flex: 1;

  display: flex;
  flex-direction: column;
  background-color: hsl(var(--rose-050-color));

  padding: var(--spacing-0300);
}

.container__img-item {
  height: 100%;
}

.container__img-item img {
  height: 48px;
}

.container__item-cart {
  display: flex;
  gap: var(--spacing-0100);
}

.container__order-total {
  justify-self: flex-end;

  display: flex;
  justify-content: space-between;
}

ul {
  flex: 1;

  list-style: none;

  padding: 0;
  margin: 0;
}

li {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: var(--spacing-0200);
}

.container__button-start_new {
  display: grid;
}

h1 {
  padding-bottom: var(--spacing-0050);
}

.item-name {
  padding-bottom: var(--spacing-0050);
}

.font-preset-2 {
  font: var(--font-preset-2);
}

.font-preset-3 {
  font: var(--font-preset-3);
}

.font-preset-4-b {
  font: var(--font-preset-4-b);
}

.light-rose-text {
  color: hsl(var(--rose-500-color));
}

hr {
  grid-column: 1/-1;
}

@media (min-width: 43.75em) {
  .popup__order-confirmation {
    bottom: 50%;
    left: 50%;
    translate: -50% 50%;

    height: 43em;
    width: 43em;
    background-color: hsl(var(--white-color));

    border-radius: 12px;
  }
}
</style>
