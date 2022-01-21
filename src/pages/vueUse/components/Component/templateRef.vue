<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>将 ref 绑定到模板元素的简写</template>
        <template #codeEffect>
            <el-input ref="target" v-model="inputText" />
            <div class="p-4">{{ text }}</div>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { ref, watch } from 'vue'
import { templateRef } from '@vueuse/core'

const target = templateRef('target')
const inputText = ref('')
const text = ref('')

watch(inputText, () => {
    // text的value值是通过templateRef获取过来的
    if (target.value)
        // @ts-ignore
        text.value = target.value.modelValue
})
</script>