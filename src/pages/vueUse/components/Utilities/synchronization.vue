<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>同步ref</template>
        <template #codeEffect>
            <div class="flex flex-col">
                <el-input v-model="a" class="w-[200px]"></el-input>
                <el-input v-model="b" class="w-[200px] mt-2"></el-input>
            </div>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { biSyncRef } from '@vueuse/core';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const a = ref('')
const b = ref('')
biSyncRef(a, b)
</script>