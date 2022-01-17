<!--
 * @Date: 2022-01-17 11:08:04
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useEyeDropper.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>
            测色计，需要高版本浏览器才支持
            <a
                class="text-sky-500 dark:text-sky-400"
                href="https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API"
                target="blank"
            >mozilla文档 EyeDropper_API</a>
        </template>
        <template #codeEffect>
            <div v-if="isSupported">
                <div>isSupported: {{ isSupported }}</div>
                <div>sRGBHex: {{ sRGBHex }}</div>
            </div>
            <el-button
                v-if="isSupported"
                @click="() => open()"
            >{{ isSupported ? 'Open Eye Dropper' : 'Not Supported by Your Browser' }}</el-button>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from './AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { useEyeDropper } from '@vueuse/core'
const { isSupported, open, sRGBHex } = useEyeDropper()

</script>
