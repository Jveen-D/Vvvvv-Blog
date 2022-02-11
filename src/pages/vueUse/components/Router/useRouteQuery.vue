<!--
 * @Date: 2022-02-11 16:26:21
 * @LastEditors: dwj18066042960
 * @FilePath: \Vvvvv-Blog\src\pages\vueUse\components\Router\useRouteQuery.vue
-->
<template>
  <AvueUseBaseCom :id="props.id">
    <template #des>响应式route.query的简写</template>
    <template #codeEffect>
      <div class="flex flex-col">
        <pre lang="yaml">使用前需要先安装 pnpm i @vueuse/router</pre>
        <el-input class="w-[300px]" v-model="search"></el-input>
        <pre lang="yaml">{{ search }}</pre>
      </div>
    </template>
  </AvueUseBaseCom>
</template>
<script lang="ts" setup>
  import { useRouteQuery } from '@vueuse/router';
  import { watchEffect } from 'vue';

  import AvueUseBaseCom from '../AvueUseBaseCom.vue';
  // props
  const props = defineProps<{
    id: number;
  }>();
  const search = useRouteQuery('search');
  watchEffect(() => {
    console.log(search.value);
  });
</script>
