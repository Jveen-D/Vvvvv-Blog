<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>创建一个接受ref作为参数的普通函数。在这个新函数的内部会自动取ref的value值</template>
        <template #codeEffect>
            <pre lang="yaml">status:{{ state.data.status }}</pre>
            <pre lang="yaml">data:{{ state.data }}</pre>
            <el-button @click="willFiledGet">willFiledGet</el-button>
            <el-button @click="willSuccessGet">willSuccessGet</el-button>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>                                
import { ref, reactive } from 'vue';
import { createUnrefFn } from '@vueuse/core';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const url = ref('/api/content/users/profile?api_access_key=kingofthekill')
const post = async (url) => {
    const response = await fetch(url, {
        method: 'GET',
    });
    return response.json()
}
const unrefPost = createUnrefFn(post)

const state: any = reactive({
    data: {}
})
const willFiledGet = () => {
    post(url).then((data) => {
        state.data = data
    }).catch((error) => {
        state.data = error
    })
}

const willSuccessGet = () => {
    unrefPost(url).then((data) => {
        state.data = data
    }).catch((error) => {
        state.data = error
    })
}
</script>