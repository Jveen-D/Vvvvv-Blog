<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>
            <div>dom 元素的 unref,如果参数是一个 ElRef，则返回内部值，否则返回参数本身</div>
        </template>
        <template #codeEffect>
            <div ref="firstEl" class="bg-gray-200 h-[20px]"></div>
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
import { unrefElement, tryOnMounted } from '@vueuse/core'

const firstEl: ElRef = ref()
const secEl: ElRef = ref('show at console')
tryOnMounted(() => {
    console.log(unrefElement(firstEl))
    console.log(unrefElement(secEl))
    console.log(firstEl.value)
})
</script>