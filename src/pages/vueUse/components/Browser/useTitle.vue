<!--
 * @Date: 2022-01-18 11:11:27
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useTitle.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>标题，一般在原生input使用</template>
        <template #codeEffect>
            <input v-model="title" type="text">
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { useTitle } from '@vueuse/core'

const title = useTitle()
console.log(title.value) // print current title
title.value = 'Hello' // change current title

</script>