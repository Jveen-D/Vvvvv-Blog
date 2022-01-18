<!--
 * @Date: 2022-01-18 16:26:08
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/Sensors/useFocus.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>focus,注意对组件不适用</template>
        <template #codeEffect>
            <div>inputElFocus:{{ inputElFocus }}</div>
            <div>elementInputElFocus:{{ elementInputElFocus }}</div>
            <input ref="inputEl" />
            <el-input  class="mt-2" ref="elementInputEl" />
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { ref } from 'vue'
import { useFocus } from '@vueuse/core'

const inputEl = ref<ElRef>(null)
const elementInputEl = ref<ElRef>(null)
const { focused: inputElFocus } = useFocus({ target: inputEl })
const { focused: elementInputElFocus } = useFocus({ target: elementInputEl })
</script>