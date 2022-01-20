<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>文档可见性，但是这个api有局限，必须是document的滚动轴滚动才会看到区别，元素的滚动是不会改变isVisible这个状态的,所以在这里看不到效果</template>
        <template #codeEffect>
            <div ref="el" class="w-[400px] h-[100px] bg-white">123</div>
            <div class="fixed bottom-[40px] left-[240px] bg-purple-500 text-black">isVisible:{{ isVisible }}</div>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();


import { ref } from 'vue'
import { useElementVisibility } from '@vueuse/core';

const el: ElRef = ref(null)
const isVisible = useElementVisibility(el)
</script>

