<!--
 * @Date: 2022-01-18 16:36:52
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/Sensors/useFocusWithin.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>用于检查元素中是否存在焦点,对组件也适用</template>
        <template #codeEffect>
            <div>是否包含焦点：{{ withinFocus }}</div>
            <form ref="target" class="flex flex-col">
                <input class="mt-2" type="text" placeholder="First Name" />
                <input class="mt-2" type="text" placeholder="Last Name" />
                <input class="mt-2" type="text" placeholder="Email" />
                <input class="mt-2" type="text" placeholder="Password" />
            </form>
            <el-form ref="elementTarget" class="mt-2">
                <el-form-item label="Approved by">
                    <el-input placeholder="Approved by"></el-input>
                </el-form-item>
                <el-form-item label="Activity zone">
                    <el-select placeholder="Activity zone">
                        <el-option label="Zone one" value="shanghai"></el-option>
                        <el-option label="Zone two" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">Query</el-button>
                </el-form-item>
            </el-form>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { ref, watch } from 'vue'
import { useFocusWithin } from '@vueuse/core'

const target = ref();
const elementTarget = ref();
const withinFocus = ref<boolean>(false)
const { focused:formFocused } = useFocusWithin(target)

watch(formFocused, focused => {
    if (focused) withinFocus.value = true
    else withinFocus.value = false
})

const { focused:elementFormFocused } = useFocusWithin(elementTarget)

watch(elementFormFocused, focused => {
    if (focused) withinFocus.value = true
    else withinFocus.value = false
})
</script>