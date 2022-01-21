<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>
            <div>useVModels与useVModel的区别就在于useVModels接收多个参数</div>
        </template>
        <template #codeEffect>
            组件id:{{ id }}
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

import { useVModels } from '@vueuse/core'

const emit = defineEmits(['update:id'])
const {id} = useVModels(props, emit)
const changeId = () => {
    id.value = 111
}
</script>