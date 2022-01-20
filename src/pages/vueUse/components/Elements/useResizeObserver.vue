<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>监听元素resize</template>
        <template #codeEffect>
            <el-input ref="target" type="textarea" class="resizer" disabled v-model="text" />
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
import { useResizeObserver } from '@vueuse/core';

const text = ref('')
const target: ElRef = ref(null)
useResizeObserver(target, (entries) => {
    const [entry] = entries
    const { width, height } = entry.contentRect
    text.value = `width: ${width}\nheight: ${height}`
})

</script>

