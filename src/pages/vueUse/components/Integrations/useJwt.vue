<!--
 * @Date: 2022-02-11 15:28:19
 * @LastEditors: dwj18066042960
 * @FilePath: \Vvvvv-Blog\src\pages\vueUse\components\Integrations\useJwt.vue
-->
<template>
  <AvueUseBaseCom :id="props.id">
    <template #des>jwt</template>
    <template #codeEffect>
      <pre lang="yaml">{{ header }}</pre>
      <pre lang="yaml">{{ payload }}</pre>
    </template>
  </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { useJwt } from '@vueuse/integrations/useJwt';
import { ref } from 'vue';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
  id: number;
}>();

const encodedJwt = ref(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ.L8i6g3PfcHlioHCCPURC9pmXT7gdJpx3kOoyAfNUwCc'
);
const { header, payload } = useJwt(encodedJwt);
</script>
