<!--
 * @Date: 2022-01-18 12:57:11
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useVibrate.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>使用震动</template>
        <template #codeEffect>
            <div v-if="isSupported">
                <el-button @click="() => vibrate()">vibrate</el-button>
                <el-button @click="() => stop()">stop</el-button>
            </div>
            <div v-else>暂不支持web程序调用此api</div>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from './AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { useVibrate } from '@vueuse/core'

const { vibrate, stop, isSupported } = useVibrate({ pattern: [300, 100, 300] })
</script>