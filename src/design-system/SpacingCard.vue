<script setup>
  import { reactive } from 'vue';

  const props = defineProps({
    groups: Object,
  });

  const items = reactive(props.groups);
</script>

<template>
  <table>
    <colgroup>
      <col class="th__name" />
      <col class="th__pixels" />
      <col class="th__display" />
    </colgroup>
    <thead>
      <tr>
        <th>Name</th>
        <th>Pixels</th>
        <th>Spacing</th>
      </tr>
    </thead>
    <tbody v-for="item in items" :key="item.name">
      <tr>
        <td>{{ item.name }}</td>
        <td>{{ item.pixels }}</td>
        <td>
          <div
            class="spacing-display"
            :style="{ width: `var(${item.variable})` }"
          ></div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
  .text-content {
    display: flex;
    gap: 12px;
  }

  .spacing-display {
    height: 42px;
    background-color: hsl(var(--navy-050-color));
  }

  table {
    width: 100%;
  }

  .th__name {
    width: 50%;
  }

  .th__pixels,
  .th__display {
    width: 25%;
  }

  th {
    text-align: start;
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
