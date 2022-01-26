<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>同时使对象和数组同构可解构，使用注意数组和对象结构的语法和规则</template>
        <template #codeEffect>请查看控制台</template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { ref, Ref, reactive } from 'vue'
import { makeDestructurable } from '@vueuse/core';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const foo = reactive({ name: 'foo' })
const bar: Ref<number> = ref(1024)

const obj = makeDestructurable(
    { foo, bar } as const,
    [foo, bar] as const
)
let { foo: a, bar: b } = obj
let [c, d] = obj
console.log(a, b)
console.log(c, d)
</script>