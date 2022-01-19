<!--
 * @Date: 2022-01-19 09:58:12
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/Sensors/useMousePressed.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>反应式鼠标按下状态</template>
        <template #codeEffect>
            <pre lang="yaml">{{pressed}}</pre>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import {reactive} from 'vue'
import { useMousePressed } from '@vueuse/core'

const pressed = reactive(useMousePressed())
</script>