<!--
 * @Date: 2022-01-18 13:45:50
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/Sensors/onClickOutside.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>onClickOutside元素外点击</template>
        <template #codeEffect>
            <div ref="el">
                <el-button @click="inner">click me</el-button>
            </div>
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
import { onClickOutside } from '@vueuse/core'

const el = ref<ElRef>()
const inner = () => {
    console.log('inner')
}
onClickOutside(el, (event) => {
    console.log(event)
    console.log('outside click')
})
</script>