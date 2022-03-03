<template>
  <TypeChallengesBaseCom :id="props.id">
    <template #des>实现 Readonly</template>
    <template #easy></template>
    <template #questionDes
      >不要使用内置的Readonly，自己实现一个。 该 Readonly 会接收一个
      泛型参数，并返回一个完全一样的类型，只是所有属性都会被 readonly 所修饰。
      也就是不可以再对该对象的属性赋值。</template
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
