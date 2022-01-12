<!--
 * @Date: 2022-01-12 10:50:02
 * @LastEditors: dwj18066042960
 * @FilePath: \Vvvvv-Blog\src\pages\vueUse\components\useColorMode.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>useColorMode</template>
        <template #codeEffect>
            <div>当前主题：{{ mode }}</div>
            <el-button @click="() => next()">
                <div>点击切换主题</div>
            </el-button>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from './AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { useColorMode, useCycleList } from '@vueuse/core'
const mode = useColorMode({
    modes: {
        contrast: 'dark contrast',
        cafe: 'cafe',
    },
    onChanged:(mode)=>{
        console.log(mode)
    }
})
const { next } = useCycleList(['dark', 'light'], { initialValue: mode })
</script>