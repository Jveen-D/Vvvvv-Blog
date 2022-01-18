<!--
 * @Date: 2022-01-18 15:53:25
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/Sensors/useElementByPoint.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>point反应元素位置</template>
        <template #codeEffect>
            <teleport to="body">
                <div ref="box" :style="boxStyles" />
                <div
                    ref="point"
                    :style="pointStyles"
                    class="w-2 h-2 rounded-full bg-green-400 shadow"
                />
            </teleport>
            <div class="flex items-center mt-2">
                <span class="mr-4">x:</span>
                <el-input v-model="x" type="number" />
            </div>
            <div class="flex items-center mt-2">
                <span class="mr-4">y:</span>
                <el-input v-model="y" type="number" />
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

import { computed, reactive } from 'vue'
import { useElementBounding, useEventListener, useMouse, useElementByPoint } from '@vueuse/core'

const { x, y } = useMouse({ type: 'client' })
const { element } = useElementByPoint({ x, y })
const bounding = reactive(useElementBounding(element))
useEventListener('scroll', bounding.update, true)
const boxStyles = computed(() => {
    if (element.value) {
        return {
            position: 'fixed',
            width: `${bounding.width}px`,
            height: `${bounding.height}px`,
            left: `${bounding.left}px`,
            top: `${bounding.top}px`,
            backgroundColor: '#3eaf7c44',
            pointerEvents: 'none',
            zIndex: 9999,
            transition: 'all 0.05s linear',
            border: '1px solid var(--c-brand)',
        }
    }
    return {
        display: 'none',
    }
})
const pointStyles = computed<Record<string, string | number>>(() => ({
    position: 'fixed',
    left: '0px',
    top: '0px',
    pointerEvents: 'none',
    zIndex: 9999,
    transform: `translate(calc(${x.value}px - 50%), calc(${y.value}px - 50%))`,
}))
</script>