<!--
 * @Date: 2022-02-11 15:38:14
 * @LastEditors: dwj18066042960
 * @FilePath: \Vvvvv-Blog\src\pages\vueUse\components\Integrations\useNProgress.vue
-->
<template>
  <AvueUseBaseCom :id="props.id">
    <template #des>进度条</template>
    <template #codeEffect>
      <div class="flex flex-col">
        <b v-if="isLoading && progress" class="ml-2">{{ (progress * 100).toFixed(0) }}%</b>
        <el-button class="w-[100px]" @click="isLoading = !isLoading">start</el-button>
      </div>
    </template>
  </AvueUseBaseCom>
</template>
<script lang="ts" setup>
  import { useNProgress } from '@vueuse/integrations/useNProgress';
  import AvueUseBaseCom from '../AvueUseBaseCom.vue';
  // props
  const props = defineProps<{
    id: number;
  }>();

  const { isLoading, progress } = useNProgress();
</script>
