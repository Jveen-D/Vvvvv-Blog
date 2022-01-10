<!--
 * @Date: 2022-01-10 13:57:36
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useActiveElement.vue
-->
<template>
  <div class="w-full h-full px-2 mr-4 text-gray-700 dark:text-gray-200">
    <b>效果</b>
    <div class="grid grid-cols-2 gap-4 mt-2">
      <el-input v-for="i in 4" :key="i" :modelValue="`No.${i}`"></el-input>
      <p>当前选中的：{{ key }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { watch, ref } from 'vue';
  import { useActiveElement } from '@vueuse/core';
  const activeElement = useActiveElement();
  const key = ref(null);
  watch(
    activeElement,
    (el: ElRef) => {
      key.value = el.value ? el.value : 'null';
    },
    { immediate: true }
  );
</script>

<style lang="scss" scoped></style>
