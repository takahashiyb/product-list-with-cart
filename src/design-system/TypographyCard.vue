<script setup>
  import { reactive } from 'vue';

  const props = defineProps({
    groups: Object,
  });

  const items = reactive(props.groups);
</script>

<template>
  <div class="container__typography">
    <div v-for="item in items" :key="item.name">
      <h2>
        <span>{{ item.name }}</span
        >{{ item['font-family'] }}
      </h2>
      <div class="text-content">
        <p>{{ item['font-size'] }}</p>
        <p>{{ item['line-height'] }}</p>
        <p>{{ item['letter-spacing'] }}</p>
      </div>
      <hr />
      <p :style="{ font: `var(${item.variable})` }">
        {{ item['sample-text'] }}
      </p>
    </div>
  </div>
</template>

<style scoped>
  .container__typography {
    display: flex;
    flex-direction: column;
    gap: 72px;

    padding: 0;
  }

  .text-content {
    display: flex;
    gap: 12px;
  }

  h2 {
    text-transform: capitalize;
  }

  p {
    font: var(--font-preset-6-m);
  }

  span {
    display: inline-block;
    text-transform: uppercase;
    color: slategray;

    padding-right: 1em;
  }
</style>
