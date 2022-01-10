<!--
 * @Date: 2022-01-10 13:57:36
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useActiveElement.vue
-->
<template>
  <div class="w-full h-full p-8">
      useActiveElement
  </div>
</template>

<script lang="ts" setup>
import { coreHooks } from '/@/hooks/core/coreHooks';
const { dispatchChangeSlug } = coreHooks();
dispatchChangeSlug('vueuse')
</script>

<style lang="scss" scoped></style>