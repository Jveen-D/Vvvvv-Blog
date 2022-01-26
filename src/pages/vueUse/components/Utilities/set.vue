<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>ref.value = x的简写</template>
        <template #codeEffect>
            <div class="flex flex-col gap-1">
                <pre lang="yaml">count:{{ count }}</pre>
                <el-input v-model="num" type="number" class="w-[200px]"></el-input>
                <el-button @click="changeCount" class="w-[200px]">setNull</el-button>
            </div>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { set, get } from '@vueuse/core';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const count = ref(0)
const num = ref(0)
const changeCount = () => {
    set(count, get(num))
}
</script>