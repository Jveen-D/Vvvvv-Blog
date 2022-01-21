<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>
            <div>轻松创建虚拟列表</div>
        </template>
        <template #codeEffect>
            <div class="flex items-center">
                <div class="break-normal mr-[20px]">Jump to index</div>
                <el-input
                    class="w-[200px]"
                    v-model="index"
                    @keyup.enter.native="handleScrollTo"
                    placeholder="Index"
                    type="number"
                />
                <el-button @click="handleScrollTo">Go</el-button>
            </div>
            <div class="flex items-center">
                <div class="break-normal mr-[20px]">Filter list by size</div>
                <el-input
                    class="w-[200px]"
                    v-model="search"
                    placeholder="e.g. small, medium, large"
                    type="search"
                />
            </div>
            <div
                v-bind="containerProps"
                class="p-2 border border-gray-200 border-opacity-20 overflow-auto rounded h-[300px] bg-gray-500/5"
            >
                <div v-bind="wrapperProps">
                    <div
                        v-for="{ index, data } in list"
                        :key="index"
                        class="mb-2 border border-gray-500"
                        :style="{
                            height: `${data.height}px`,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }"
                    >
                        Row {{ index }}
                        <span>({{ data.size }})</span>
                    </div>
                </div>
            </div>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { ref, Ref, computed } from 'vue'
import { useVirtualList } from '@vueuse/core'

const index: Ref = ref()
const search = ref('')
const allItems = Array.from(Array(99999).keys())
    .map(i => ({
        height: i % 2 === 0 ? 42 : 84,
        size: i % 2 === 0 ? 'small' : 'large',
    }))

const filteredItems = computed(() => {
    console.log()
    return allItems.filter(i => i.size.startsWith(search.value.toLowerCase()))
})
const { list, containerProps, wrapperProps, scrollTo } = useVirtualList(
    filteredItems,
    {
        itemHeight: i => (filteredItems.value[i].height),
        overscan: 10,
    },
)
const handleScrollTo = () => {
    scrollTo(index.value)
}
</script>