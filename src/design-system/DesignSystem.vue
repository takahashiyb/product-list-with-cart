<script setup>
  import { reactive } from 'vue';

  import DesignContainer from '@/design-system/DesignContainer.vue';
  // import ColorCard from "@/design-system/ColorCard.vue";

  import data from '@/design-system/data/data.json';

  const json = reactive(data);
</script>

<template>
  <DesignContainer
    v-for="category in json"
    :key="category.category"
    :object="category"
  >
  </DesignContainer>
</template>

<style scoped></style>
