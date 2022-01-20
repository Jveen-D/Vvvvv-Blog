<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>window.onfocus使用和window.onblur事件响应式跟踪窗口焦点，只有当document滚动才能看到效果，元素滚动触发不了</template>
        <template #codeEffect>
            <div class>
                x: {{ x }}
                <br />
                y: {{ y }}
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

import { useWindowScroll } from '@vueuse/core'

const { x, y } = useWindowScroll()
</script>

    