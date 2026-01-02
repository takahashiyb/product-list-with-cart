<script setup>
import AddMinusButton from './AddMinusButton.vue'
import AddToCartButton from './AddToCartButton.vue'
import CloseButton from './CloseButton.vue'
</script>

<template>
  <h2>Increment Button</h2>
  <div>
    <AddMinusButton :shape="'plus'" />
  </div>

  <h2>Decrement Button</h2>
  <div>
    <AddMinusButton :shape="'minus'" />
  </div>

  <h2>Close Button</h2>
  <div>
    <CloseButton />
  </div>

  <h2>Add to Cart Button</h2>
  <div>
    <AddToCartButton />
  </div>
</template>

<style scoped>
div {
  display: grid;
  place-content: center;
  background-color: lightgray;

  padding-bottom: 100px;
}
</style>
