<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>
            <div>v-model 绑定的简写，props + emit -> ref，useVModel的emit的名称是update开头的</div>
        </template>
        <template #codeEffect>
            组件id:{{ data }}
            <el-button @click="changeId">changeId</el-button>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { useVModel } from '@vueuse/core'

const emit = defineEmits(['update:id'])
const data = useVModel(props, 'id', emit)
const changeId = () => {
    data.value = 111
}
</script>