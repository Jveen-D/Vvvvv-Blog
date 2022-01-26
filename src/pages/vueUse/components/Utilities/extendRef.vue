<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>为 Ref 添加额外的属性，此功能与 Vue 2 不兼容，并且template模板中不能访问额外的属性</template>
        <template #codeEffect>请查看控制台</template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { extendRef } from '@vueuse/core';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const myRef = ref('content')

const extended = extendRef(myRef, { foo: 'extra data' })
console.log(extended.foo)
console.log(extended.value)

</script>