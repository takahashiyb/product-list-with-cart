<script setup>
import AddMinusButton from './AddMinusButton.vue'
import AddToCartButton from './AddToCartButton.vue'
import CloseButton from './CloseButton.vue'
import PrimaryButton from './PrimaryButton.vue'
</script>

<template>
  <h1>Components</h1>
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

  <h2>Primary Button</h2>
  <div>
    <PrimaryButton>Placeholder</PrimaryButton>
  </div>
</template>

<style scoped>
h1 {
  padding: 72px 160px;
}

div {
  display: grid;
  place-content: center;
  background-color: lightgray;

  padding: 30px 0;

  margin: 0 160px;
}

h2 {
  padding: 0 160px;
}
</style>
