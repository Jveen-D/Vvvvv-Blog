<!--
 * @Date: 2022-02-11 15:57:50
 * @LastEditors: dwj18066042960
 * @FilePath: \Vvvvv-Blog\src\pages\vueUse\components\Router\useRouteHash.vue
-->
<template>
  <AvueUseBaseCom :id="props.id">
    <template #des>响应式route.hash 的简写</template>
    <template #codeEffect>
      <div class="flex flex-col">
        <pre lang="yaml">使用前需要先安装 pnpm i @vueuse/router</pre>
        <pre lang="yaml">{{ search }}</pre>
        <el-button class="w-[300px]" @click="replaceRouter">replaceRouter</el-button>
      </div>
    </template>
  </AvueUseBaseCom>
</template>
<script lang="ts" setup>
  import { useRouteHash } from '@vueuse/router';

  import AvueUseBaseCom from '../AvueUseBaseCom.vue';
  // props
  const props = defineProps<{
    id: number;
  }>();

  const search = useRouteHash();
  const replaceRouter = () => {
    search.value = '#a';
  };
</script>
