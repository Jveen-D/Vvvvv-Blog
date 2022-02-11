<!--
 * @Date: 2022-02-11 15:51:45
 * @LastEditors: dwj18066042960
 * @FilePath: \Vvvvv-Blog\src\pages\vueUse\components\Integrations\useQRCode.vue
-->
<template>
  <AvueUseBaseCom :id="props.id">
    <template #des>动态创建二维码</template>
    <template #codeEffect>
      <div class="flex flex-col">
        <el-input class="w-[400px]" v-model="text"></el-input>
        <img class="w-[200px] h-[200px] mt-2" v-if="text" :src="qrcode" alt="QR Code" />
      </div>
    </template>
  </AvueUseBaseCom>
</template>
<script lang="ts" setup>
  import { useQRCode } from '@vueuse/integrations/useQRCode';
  import AvueUseBaseCom from '../AvueUseBaseCom.vue';
  import { ref } from 'vue';
  // props
  const props = defineProps<{
    id: number;
  }>();

  const text = ref('https://vueuse.org');
  const qrcode = useQRCode(text, {
    errorCorrectionLevel: 'H',
    margin: 3,
  });
</script>
