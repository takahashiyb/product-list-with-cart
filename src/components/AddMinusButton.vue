<script setup>
import { ref, defineProps } from 'vue'

let isNotHovering = ref(true)

const shape = defineProps({
  shape: String,
})

const symbol = {
  plus: 'M5 1 v8 M1 5 h8',
  minus: 'M1 5 h8',
}

const svgPath = symbol[shape.shape]

function checkHover(e) {
  isNotHovering.value = e.type === 'mouseleave'
}
</script>

<template>
  <button @mouseenter="checkHover($event)" @mouseleave="checkHover($event)">
    <!-- Default: white plus on transparent -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="plus-icon"
      viewBox="0 0 10 10"
      v-if="isNotHovering"
    >
      <path :d="svgPath" stroke="white" />
    </svg>

    <!-- Hover: white background with transparent plus -->
    <svg xmlns="http://www.w3.org/2000/svg" class="cutout-icon" viewBox="0 0 10 10" v-else>
      <defs>
        <mask id="plus-mask" maskUnits="userSpaceOnUse">
          <rect width="10" height="10" fill="white" />

          <path :d="svgPath" stroke="black" />
        </mask>
      </defs>
      <g mask="url(#plus-mask)">
        <rect width="10" height="10" fill="white" />
      </g>
    </svg>
  </button>
</template>

<style scoped>
button {
  all: unset;
  width: 40px;
  height: 40px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid white;
}

button svg {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
