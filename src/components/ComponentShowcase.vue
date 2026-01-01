<script setup>
import AddMinusButton from './AddMinusButton.vue'
</script>

<template>
  <h2>Increment Button</h2>
  <div>
    <AddMinusButton :shape="'plus'"></AddMinusButton>
  </div>

  <h2>Decrement Button</h2>
  <div>
    <AddMinusButton :shape="'minus'"></AddMinusButton>
  </div>
</template>

<style scoped>
div {
  display: grid;
  place-content: center;
  background-color: hsl(var(--rose-400-color));
}
</style>
