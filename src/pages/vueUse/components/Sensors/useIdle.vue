<!--
 * @Date: 2022-01-18 17:16:49
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/Sensors/useIdle.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>空闲时间</template>
        <template #codeEffect>
            <div>当前是否空闲：{{idle}}</div>
            <div>持续时间：{{idledFor}}s</div>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import {computed} from 'vue'
import { useIdle,useTimestamp } from '@vueuse/core'
const { idle, lastActive } = useIdle(5000) // 参数为判定空闲的时间
const now = useTimestamp()
const idledFor = computed(() =>
  Math.floor((now.value - lastActive.value) / 1000),
)
</script>