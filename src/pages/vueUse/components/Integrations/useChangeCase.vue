<!--
 * @Date: 2022-03-18 19:19:19
 * @LastEditors: dwj18066042960
 * @FilePath: \Vvvvv-Blog\src\pages\vueUse\components\Integrations\useChangeCase.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>先安装下依赖 pnpm i @vueuse/integrations</template>
        <template #codeEffect>
            <el-radio-group v-model="type">
                <el-radio v-for="item in arr" :label="item" size="small" :key="item">{{ item }}</el-radio>
            </el-radio-group>
            <el-input class="w-[200px]" v-model="text"></el-input>
            <div>{{ changeCase }}</div>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import type { ChangeCaseType } from '@vueuse/integrations/useChangeCase';
import { useChangeCase } from '@vueuse/integrations/useChangeCase';
import { computed, ref } from 'vue';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';

// props
const props = defineProps<{
    id: number;
}>();
const arr: Array<ChangeCaseType> = [
    'camelCase',
    'capitalCase',
    'constantCase',
    'dotCase',
    'headerCase',
    'noCase',
    'paramCase',
    'pascalCase',
    'pathCase',
    'sentenceCase',
    'snakeCase',
]
const text = ref('hello world')
const type = ref<ChangeCaseType>('camelCase')
const changeCase = computed(() => {
    return useChangeCase(text, type.value)
})
</script>