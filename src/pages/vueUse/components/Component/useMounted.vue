<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>
            <div>挂载状态</div>
        </template>
        <template #codeEffect>{{ isMounted ? "组件已加载" : "组件未加载" }}</template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { useMounted } from '@vueuse/core'

const isMounted = useMounted()

// 本质上是以下缩写
/**
    const isMounted = ref(false)

    onMounted(() => {
    isMounted.value = true
    })
*/
</script>