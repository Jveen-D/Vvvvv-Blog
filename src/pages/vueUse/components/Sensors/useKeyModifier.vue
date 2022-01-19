<!--
 * @Date: 2022-01-19 09:02:18
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/Sensors/useKeyModifier.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>跟踪键盘状态</template>
        <template #codeEffect>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
                <div :class="[capsLock?'bg-opacity-60 border border-blue-700':'','box-border h-[30px] flex justify-center items-center rounded-lg w-[200px] bg-white bg-opacity-40']" :value="capsLock || false">capsLock</div>
                <div :class="[numLock?'bg-opacity-60 border border-blue-700':'','box-border h-[30px] flex justify-center items-center rounded-lg w-[200px] bg-white bg-opacity-40']" :value="numLock || false">numLock</div>
                <div :class="[scrollLock?'bg-opacity-60 border border-blue-700':'','box-border h-[30px] flex justify-center items-center rounded-lg w-[200px] bg-white bg-opacity-40']" :value="scrollLock || false">scrollLock</div>
                <div :class="[shift?'bg-opacity-60 border border-blue-700':'','box-border h-[30px] flex justify-center items-center rounded-lg w-[200px] bg-white bg-opacity-40']" :value="shift || false">shift</div>
                <div :class="[control?'bg-opacity-60 border border-blue-700':'','box-border h-[30px] flex justify-center items-center rounded-lg w-[200px] bg-white bg-opacity-40']" :value="control || false">control</div>
                <div :class="[alt?'bg-opacity-60 border border-blue-700':'','box-border h-[30px] flex justify-center items-center rounded-lg w-[200px] bg-white bg-opacity-40']" :value="alt || false">alt</div>
            </div>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { useKeyModifier } from '@vueuse/core'
const capsLock = useKeyModifier('CapsLock',{ events: ['mouseup', 'mousedown'] })
const numLock = useKeyModifier('NumLock')
const scrollLock = useKeyModifier('ScrollLock')
const shift = useKeyModifier('Shift')
const control = useKeyModifier('Control')
const alt = useKeyModifier('Alt')

</script>