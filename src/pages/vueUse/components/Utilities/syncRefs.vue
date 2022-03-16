<!--
 * @Date: 2022-02-11 15:13:44
 * @LastEditors: dwj18066042960
 * @FilePath: \Vvvvv-Blog\src\pages\vueUse\components\Utilities\syncRefs.vue
-->
<template>
  <AvueUseBaseCom :id="props.id">
    <template #des>使目标引用与源引用保持同步</template>
    <template #codeEffect>
      <div class="flex flex-col gap-1">
        <pre lang="yaml">source修改时始终会让target1与target2保持同步</pre>
        <div class="flex items-center">
          <div class="w-[80px]">source:</div>
          <el-input class="w-[240px]" v-model="source"></el-input>
        </div>
        <div class="flex items-center">
          <div class="w-[80px]">target1:</div>
          <el-input class="w-[240px]" v-model="target1"></el-input>
        </div>
        <div class="flex items-center">
          <div class="w-[80px]">target2:</div>
          <el-input class="w-[240px]" v-model="target2"></el-input>
        </div>
      </div>
    </template>
  </AvueUseBaseCom>
</template>
<script lang="ts" setup>
  import { syncRefs } from '@vueuse/core';
  import { ref } from 'vue';
  import AvueUseBaseCom from '../AvueUseBaseCom.vue';
  // props
  const props = defineProps<{
    id: number;
  }>();

  const source = ref('');
  const target1 = ref('');
  const target2 = ref('');
  syncRefs(source, [target1, target2]);
</script>
