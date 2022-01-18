<!--
 * @Date: 2022-01-18 09:43:56
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/usePreferredLanguages.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>查询用户当前语言</template>
        <template #codeEffect>
            <div>current languages:{{languages}}</div> 
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from './AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { usePreferredLanguages } from '@vueuse/core'

const languages = usePreferredLanguages()

</script>