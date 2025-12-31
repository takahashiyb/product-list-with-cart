<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    groups: Object,
  });

  const items = ref(props.groups);
</script>

<template>
  <div v-for="item in items" :key="item.group">
    <h2>{{ item.group }}</h2>
    <hr />
    <ul class="color-group">
      <li v-for="color in item.list">
        <div
          class="color-box"
          :style="{ backgroundColor: `hsl(var(${color.variable}))` }"
        ></div>
        <div class="text-content">
          <h3>{{ color.name }}</h3>
          <p><span>HEX </span>{{ color.hex }}</p>
          <p><span>RGB </span>{{ color.rgb }}</p>
          <p><span>HSL </span>{{ color.hsl }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .color-group {
    padding: 0;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    list-style-type: none;
    list-style-position: inside;
    gap: 32px;
  }

  .color-box {
    height: 125px;
    width: 100%;
    border: solid black 1px;
    border-radius: 10px;
  }

  .text-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  h2,
  h3 {
    text-transform: capitalize;
  }

  h2 {
    padding-top: 72px;
  }

  span {
    display: inline-block;
    width: 77px;
    text-transform: uppercase;
    color: slategray;
  }
</style>
