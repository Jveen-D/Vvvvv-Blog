<template>
  <TypeChallengesBaseCom :id="props.id">
    <template #des>元组转换为对象</template>
    <template #easy></template>
    <template #questionDes
      >传入一个元组类型，将这个元组类型转换为对象类型，这个对象类型的键/值都是从元组中遍历出来</template
    >
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
