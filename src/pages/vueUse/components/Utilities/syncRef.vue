<!--
 * @Date: 2022-03-16 23:35:05
 * @LastEditors: dwj18066042960
 * @FilePath: \Vvvvv-Blog\src\pages\vueUse\components\Utilities\syncRef.vue
-->
<template>
  <AvueUseBaseCom :id="props.id">
    <template #des>具有单向的使目标引用与源引用保持同步</template>
    <template #codeEffect>
      <div class="flex flex-col gap-1">
        <pre lang="yaml">target1修改时始终会让target2保持同步,但这是单向的可配置的</pre>
        <div class="flex items-center">
          <div class="w-[80px]">target1:</div>
          <el-input class="w-[240px]" v-model="target1"></el-input>
        </div>
        <div class="flex items-center">
          <div class="w-[80px]">target2:</div>
          <el-input class="w-[240px]" v-model="target2"></el-input>
        </div>
        <el-button class="w-[80px]" @click="stop">stop</el-button>
      </div>
    </template>
  </AvueUseBaseCom>
</template>
<script lang="ts" setup>
  import { syncRef } from '@vueuse/core';
  import { ref } from 'vue';
  import AvueUseBaseCom from '../AvueUseBaseCom.vue';
  // props
  const props = defineProps<{
    id: number;
  }>();

  const target1 = ref('');
  const target2 = ref('');
  const stop = syncRef(target1, target2, { direction: 'ltr' });
</script>
