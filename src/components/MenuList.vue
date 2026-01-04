<script setup>
import AddToCartButton from './AddToCartButton.vue'

import { defineProps } from 'vue'

const prop = defineProps({
  menu: Object,
})
</script>

<template>
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
              <AddToCartButton :item="item"></AddToCartButton>
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
</template>

<style scoped>
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

h3 {
  font: var(--font-preset-4-r);
  color: hsl(var(--rose-500-color));
}

h4 {
  font: var(--font-preset-3);
}

ul {
  list-style-type: none;

  display: grid;
  gap: var(--spacing-0100);

  padding: 0;
}

@media (min-width: 43.75em) {
  ul {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
