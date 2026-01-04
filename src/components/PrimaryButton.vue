<script setup></script>

<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  background-color: hsl(var(--red-color));
  color: hsl(var(--white-color));
  cursor: pointer;

  font: var(--font-preset-3);

  padding: var(--spacing-0200) var(--spacing-0300);

  border-radius: 9em;
  border: none;
}

button:hover {
  background-color: hsl(var(--rose-500-color));
}
</style>
