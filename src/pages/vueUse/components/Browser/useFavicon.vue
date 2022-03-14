<!--
 * @Date: 2022-01-17 13:08:28
 * @LastEditors: dwj18066042960
 * @FilePath: \Vvvvv-Blog\src\pages\vueUse\components\Browser\useFavicon.vue
-->
<template>
  <AvueUseBaseCom :id="props.id">
    <template #des>路径为响应式变量</template>
    <template #codeEffect>
      <img class="mb-2 min-w-[200px] max-w-[200px] min-h-[240px] max-h-[240px]" :src="icon || ''" />
      <el-button @click="change">change</el-button>
    </template>
  </AvueUseBaseCom>
</template>

<script lang="ts" setup>
  import { useFavicon } from '@vueuse/core';
  import AvueUseBaseCom from '../AvueUseBaseCom.vue';
  import bg from '/@/assets/img/bg.gif';
  import bg2 from '/@/assets/img/bg2.gif';
  // props
  const props = defineProps<{
    id: number;
  }>();

  const icon = useFavicon();
  icon.value = bg;
  const change = () => {
    if (icon.value === bg) icon.value = bg2;
    else icon.value = bg;
  };
</script>
