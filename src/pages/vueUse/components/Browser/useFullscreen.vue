<!--
 * @Date: 2022-01-17 13:36:43
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useFullscreen.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>顾名思义，全屏</template>
        <template #codeEffect>
            <div>当前是否全屏：{{ isFullscreen }}</div>
            <el-button @click="() => enter()">全屏</el-button>
            <el-button @click="() => exit()">退出</el-button>
            <el-button @click="() => toggle()">切换</el-button>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { useFullscreen } from '@vueuse/core'

const { isFullscreen, enter, exit, toggle } = useFullscreen()


</script>