<!--
 * @Date: 2022-01-10 13:57:36
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useActiveElement.vue
-->
<template>
  <AvueUseBaseCom :id="props.id">
    <template #des>返回当前激活的dom节点</template>
    <template #codeEffect>
      <div class="grid grid-cols-2 gap-4 mt-2">
        <el-input v-for="i in 4" :key="i" :modelValue="`No.${i}`"></el-input>
        <p>当前选中的：{{ key }}</p>
      </div>
    </template>
  </AvueUseBaseCom>
</template>

<script lang="ts" setup>
  import AvueUseBaseCom from '../AvueUseBaseCom.vue';
  import { watch, ref } from 'vue';
  import { useActiveElement } from '@vueuse/core';
  // props
  const props = defineProps<{
    id: number;
  }>();

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
