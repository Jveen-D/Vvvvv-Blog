<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>简写ref.value，</template>
        <template #codeEffect>请查看控制台</template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { get } from '@vueuse/core';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();
/**
 * function get<T>(ref: MaybeRef<T>): T
 * 返回基本类型，不可以执行赋值等操作
 *  */
const count = ref(0)
console.log(get(count))
</script>