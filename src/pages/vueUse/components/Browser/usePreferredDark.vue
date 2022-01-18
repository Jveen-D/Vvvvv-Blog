<!--
 * @Date: 2022-01-18 09:38:00
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/usePreferredDark.vue
-->

<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>查询用户偏好是否为dark</template>
        <template #codeEffect>
            <div>当前用户颜色主题是否为dark：{{isDark}}</div> 
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { usePreferredDark } from '@vueuse/core'

const isDark = usePreferredDark()

</script>