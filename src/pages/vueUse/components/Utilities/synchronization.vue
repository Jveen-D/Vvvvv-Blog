<!--
 * @Date: 2022-02-11 15:13:44
 * @LastEditors: dwj18066042960
 * @FilePath: \Vvvvv-Blog\src\pages\vueUse\components\Utilities\synchronization.vue
-->
<template>
  <AvueUseBaseCom :id="props.id">
    <template #des>同步ref</template>
    <template #codeEffect>
      <div class="flex flex-col">
        <el-input v-model="a" class="w-[200px]"></el-input>
        <el-input v-model="b" class="w-[200px] mt-2"></el-input>
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

  const a = ref('');
  const b = ref('');
  syncRef(a, b);
</script>
