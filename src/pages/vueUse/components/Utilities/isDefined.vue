<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>非无效检查类型保护，直接看代码，和isRef是不同的</template>
        <template #codeEffect>请查看控制台</template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { ref, isRef } from 'vue';
import { isDefined } from '@vueuse/core'
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const example = ref(Math.random() ? 'example' : undefined) // Ref<string | undefined>

if (isDefined(example)) {
    console.log(example)// example
    console.log(isDefined(example))// true
    console.log(isRef(example))// true
    console.log(isDefined('example'))// true
    console.log(isRef('example'))// false
    console.log(isDefined(null))// false
    console.log(isDefined(undefined))// false
}
</script>