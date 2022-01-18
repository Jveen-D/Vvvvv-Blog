<!--
 * @Date: 2022-01-18 09:55:00
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useScriptTag.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>script脚本标签注入</template>
        <template #codeEffect>
            打开控制台可以看到，这个页面初始化自动加载了一个脚本
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { useScriptTag } from '@vueuse/core'
useScriptTag(
  'https://player.twitch.tv/js/embed/v1.js',
  // on script tag loaded.
  (el: HTMLScriptElement) => {
    // do something
    console.log(el)
    console.log('页面初始化自动加载脚本')
  },
)

</script>