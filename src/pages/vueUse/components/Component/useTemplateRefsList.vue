<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>
            <div>获取v-for的ref元素列表</div>
        </template>
        <template #codeEffect>
            <div class="grid grid-cols-10 gap-2">
                <div
                    class="flex items-center justify-center mr-2 bg-[#42b883] px-2 rounded"
                    v-for="i of count"
                    :key="i"
                    :ref="refs.set"
                >{{ i }}</div>
            </div>
            <el-button @click="()=>count += 1">add</el-button>
            <el-button @click="()=>count -= 1">reduce</el-button>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { nextTick, ref, watch } from 'vue'
import { useTemplateRefsList } from '@vueuse/core'

const count = ref(5)
const refs = useTemplateRefsList<HTMLDivElement>()

watch(refs, async () => {
    await nextTick()
    console.log([...refs.value])
}, {
    deep: true,
    flush: 'post',
})
</script>