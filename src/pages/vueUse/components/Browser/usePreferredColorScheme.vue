<!--
 * @Date: 2022-01-17 17:15:24
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/usePreferredColorScheme.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>用户颜色偏好查询</template>
        <template #codeEffect>
            <div>当前用户颜色主题：{{preferredColor}}</div> 
            <el-button @click="checkPreferredColor">show</el-button>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { usePreferredColorScheme } from '@vueuse/core'

const preferredColor = usePreferredColorScheme()
const checkPreferredColor = ()=>{
    console.log(preferredColor.value)
}

</script>