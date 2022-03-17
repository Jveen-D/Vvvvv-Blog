<!--
 * @Date: 2022-03-17 09:34:13
 * @LastEditors: dwj18066042960
 * @FilePath: \Vvvvv-Blog\src\pages\vueUse\components\Sensors\useInfiniteScroll.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>无限滚动列表</template>
        <template #codeEffect>
            <div class="grid grid-cols-2">
                <pre lang="yaml">{{ scroll }}</pre>
                <div ref="target" class="bg-gray-200 w-[260px] h-[420px] overflow-y-auto rounded">
                    <div
                        v-for="item, index in list"
                        :key="index"
                        class="text-center h-[80px] leading-[80px] bg-gray-500/5 text-black border-b-2 border-b-[#585458]"
                    >{{ item }}</div>
                </div>
            </div>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { useInfiniteScroll } from '@vueuse/core';
import { ref } from 'vue';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const list = ref([1, 2, 3, 4, 5, 6])
const target = ref<ElRef>(null);
useInfiniteScroll(
    target,
    () => {
        list.value.push(...Array.from({ length: 5 }, (_, i) => list.value.length + i))
    },
    { distance: 10 }
)
</script>