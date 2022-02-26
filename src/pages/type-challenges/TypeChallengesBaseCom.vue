<template>
  <div>{{ props }}</div>
</template>
<script setup lang="ts">
  // props
  const props = defineProps<{
    id: number;
  }>();
</script>
<style scoped lang="scss"></style>
