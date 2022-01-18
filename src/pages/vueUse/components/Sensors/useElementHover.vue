<!--
 * @Date: 2022-01-18 16:16:11
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/Sensors/useElementHover.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>hover元素</template>
        <template #codeEffect>
            <div class="w-[200px]" ref="myHoverableElement">
                <el-button>{{ isHovered ? 'hover' : 'myHoverableElement' }}</el-button>
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

import { ref } from 'vue'
import { useElementHover } from '@vueuse/core'

const myHoverableElement = ref<ElRef>(null)
const isHovered = useElementHover(myHoverableElement)
</script>