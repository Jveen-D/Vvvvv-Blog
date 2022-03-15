<!--
 * @Date: 2022-02-11 15:13:44
 * @LastEditors: dwj18066042960
 * @FilePath: \Vvvvv-Blog\src\pages\vueUse\components\Sensors\useScroll.vue
-->
<template>
  <AvueUseBaseCom :id="props.id">
    <template #des>响应式scroll滚动状态</template>
    <template #codeEffect>
      <div class="grid grid-cols-2">
        <pre lang="yaml">{{ scroll }}</pre>
        <div ref="target" class="bg-gray-200 w-[260px] h-[420px] overflow-scroll">
          <div class="w-[400px] h-[600px] relative">
            <span class="absolute top-0 left-0 text-sky-500 dark:text-sky-400">left top</span>
            <span class="absolute top-0 right-0 text-sky-500 dark:text-sky-400">right top</span>
            <span class="absolute right-0 top-1/2 text-sky-500 dark:text-sky-400">left middle</span>
            <span class="absolute left-0 top-1/2 text-sky-500 dark:text-sky-400">right middle</span>
            <span class="absolute bottom-0 right-0 text-sky-500 dark:text-sky-400"
              >right button</span
            >
            <span class="absolute bottom-0 left-0 text-sky-500 dark:text-sky-400">left bottom</span>
          </div>
        </div>
      </div>
    </template>
  </AvueUseBaseCom>
</template>
<script lang="ts" setup>
  import { useScroll } from '@vueuse/core';
  import { reactive, ref } from 'vue';
  import AvueUseBaseCom from '../AvueUseBaseCom.vue';
  // props
  const props = defineProps<{
    id: number;
  }>();

  const target = ref<ElRef>(null);
  const scroll = reactive(useScroll(target));
</script>
