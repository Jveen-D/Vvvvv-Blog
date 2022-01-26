<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>reactify的别名，将一个函数转换为响应式函数</template>
        <template #codeEffect>
        
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();


</script>