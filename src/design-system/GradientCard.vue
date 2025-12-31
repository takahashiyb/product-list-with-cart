<script setup>
  import { ref } from 'vue';

  const props = defineProps({
    groups: Object,
  });

  const items = ref(props.groups);
</script>

<template>
  <hr />
  <div class="container-gradient" v-for="item in items" :key="item.group">
    <div
      class="gradient-box"
      :style="{
        background: `linear-gradient(to bottom, var(${item.variable}))`,
      }"
    ></div>
    <h2>{{ item.group }}</h2>
    <div class="gradient-list">
      <div class="gradient-detail">
        <p><span>hex</span>{{ item.colors['color 1'].hex }}</p>
        <p><span>rgb</span>{{ item.colors['color 1'].rgb }}</p>
        <p><span>hsl</span>{{ item.colors['color 1'].hsl }}</p>
      </div>
      <div class="gradient-detail">
        <p><span>hex</span>{{ item.colors['color 2'].hex }}</p>
        <p><span>rgb</span>{{ item.colors['color 2'].rgb }}</p>
        <p><span>hsl</span>{{ item.colors['color 2'].hsl }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .container-gradient {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-top: 32px;
  }

  .gradient-box {
    height: 125px;
    width: 100%;
    border: solid black 1px;
    border-radius: 10px;
  }

  .gradient-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
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

  span {
    display: inline-block;
    width: 77px;
    text-transform: uppercase;
    color: slategray;
  }
</style>
