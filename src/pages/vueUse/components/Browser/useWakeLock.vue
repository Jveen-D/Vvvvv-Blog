<!--
 * @Date: 2022-01-18 13:07:42
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useWakeLock.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>屏幕唤醒锁</template>
        <template #codeEffect>
            <div v-if="isSupported">
                <div>isActive：{{ text }}</div>
                <el-button @click="() => onClick()">active</el-button>
            </div>
            <div v-else>暂不支持web程序调用此api</div>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { reactive, computed } from 'vue'
import { useWakeLock } from '@vueuse/core'
const { isSupported } = useWakeLock()
const wakeLock = reactive(useWakeLock())
const text = computed(() => wakeLock.isActive ? 'OFF' : 'ON')
const onClick = () => wakeLock.isActive ? wakeLock.request('screen') : wakeLock.release()
</script>