<!--
 * @Date: 2022-01-12 10:45:44
 * @LastEditors: dwj18066042960
 * @FilePath: \Vvvvv-Blog\src\pages\vueUse\components\useCssVar.vue
-->

<template>
  <AvueUseBaseCom :id="props.id">
    <template #des>useCssVar</template>
    <template #codeEffect>
      123
    </template>
  </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from './AvueUseBaseCom.vue'
// props
const props = defineProps<{
  id: number;
}>();


</script>
