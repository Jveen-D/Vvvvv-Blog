<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>监视对元素的修改</template>
        <template #codeEffect>
            <div ref="target" :class="className" aa :style="style">
                <div v-for="(text, index) of messages" :key="index">Mutation Attribute: {{ text }}</div>
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
import { useMutationObserver } from '@vueuse/core';

const target: ElRef = ref(null)
const messages = ref<string[]>([])
const className = ref({})
const style = ref({})

setTimeout(() => {
    className.value = {
        test: true,
        test2: true,
    }
}, 1000)
setTimeout(() => {
    style.value = {
        color: 'red',
    }
}, 1550)
setTimeout(() => {
    target.value.setAttribute('id', 'test')
}, 2000)
useMutationObserver(
    target,
    (mutations) => {
        const mutation = mutations[0]
        if (!mutation)
            return
        messages.value.push(mutation.attributeName!)
    },
    { attributes: true },
)
</script>

