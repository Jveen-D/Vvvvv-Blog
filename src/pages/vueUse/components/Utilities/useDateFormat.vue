<!--
 * @Date: 2022-03-17 09:59:51
 * @LastEditors: dwj18066042960
 * @FilePath: \Vvvvv-Blog\src\pages\vueUse\components\Utilities\useDateFormat.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>使目标引用与源引用保持同步</template>
        <template #codeEffect>
            <div class="font-bold text-[20px] text-emerald-500">{{ formatted }}</div>
            <el-input class="w-[400px]" v-model="format">
                <template #prepend>format:</template>
            </el-input>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { useDateFormat, useNow } from '@vueuse/core';
import { ref } from 'vue';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const format = ref('YYYY-MM-DD HH:mm:ss')
const formatted = useDateFormat(useNow(), format)
</script>
