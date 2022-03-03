<template>
  <TypeChallengesBaseCom :id="props.id">
    <template #des>实现 Pick</template>
    <template #easy></template>
    <template #questionDes>从类型 T 中选择出属性 K，构造成一个新的类型。</template>
    <template #example></template>
  </TypeChallengesBaseCom>
</template>
<script setup lang="ts">
  import TypeChallengesBaseCom from '../TypeChallengesBaseCom.vue';
  const props = defineProps<{
    id: number;
  }>();
</script>
<style scoped lang="scss"></style>
