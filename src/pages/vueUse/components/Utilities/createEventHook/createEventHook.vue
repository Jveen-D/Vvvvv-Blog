<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>创建事件钩子函数</template>
        <template #codeEffect>
            <pre lang="yaml">code：{{ response.data.status }}</pre>
            <pre lang="yaml">response：{{ response.data }}</pre>
            <el-button @click="sendFeatch">发送请求</el-button>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { Featch } from './createEventHook'
import AvueUseBaseCom from '../../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const response = reactive<{
    data: any
}>({
    data: {}
})

const sendFeatch = () => {
    const { onResult, onError } = Featch()

    onResult((result) => {
        response.data = result
    })

    onError((error) => {
        response.data = error
    })

}


</script>