<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>从反应性对象中反应性地选择字段。</template>
        <template #codeEffect>
            <div class="flex flex-col gap-1">
                <el-input v-model="picked.x" type="number" class="w-[200px]"></el-input>
                <el-input v-model="picked.y" type="number" class="w-[200px]"></el-input>
                <el-button @click="add" class="w-[200px]">add</el-button>
            </div>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { reactivePick } from '@vueuse/core';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const obj = reactive({
    x: 0,
    y: 0,
    elementX: 0,
    elementY: 0,
})

const picked = reactivePick(obj, 'x', 'y')
const add = () => {
    picked.x = Number(picked.x) + 1
    picked.y = Number(picked.y) + 1
}
</script>