<!--
 * @Date: 2022-01-19 09:52:11
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/Sensors/useMouse.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>反应鼠标位置</template>
        <template #codeEffect>
            <pre lang="yaml">{{mouse}}</pre>
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
import { useMouse } from '@vueuse/core'

const mouse = reactive(useMouse())
</script>