<script setup>
import { ref, defineProps } from 'vue'

import { useCartStore } from '../stores/counter'

const cart = useCartStore()

let isNotHovering = ref(true)

const props = defineProps({
  item: Object,
})

function checkHover(e) {
  isNotHovering.value = e.type === 'mouseleave'
}
</script>

<template>
  <button
    @mouseenter="checkHover($event)"
    @mouseleave="checkHover($event)"
    @click="cart.closeButton(props.item)"
  >
    <!-- Default: white plus on transparent -->
    <svg xmlns="http://www.w3.org/2000/svg" class="plus-icon" viewBox="0 0 10 10">
      <path d="M2 2 L8 8 M8 2 L2 8" />
    </svg>
  </button>
</template>

<style scoped>
button {
  all: unset;
  width: 20px;
  height: 20px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid hsl(var(--rose-400-color));
  cursor: pointer;
}

button svg {
  position: absolute;
  top: 0;
  left: 0;
  stroke: hsl(var(--rose-400-color));
}

button:hover {
  border-color: hsl(var(--rose-900-color));
}

button:hover path {
  stroke: hsl(var(--rose-900-color));
}
</style>
