<!--
 * @Date: 2022-01-17 13:36:43
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useFetch.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>Fetch API提供了中止请求、在请求被触发之前拦截请求、在 url 更改时自动重新获取请求以及useFetch使用预定义选项创建您自己的请求的能力。</template>
        <template #codeEffect>
            <div>isFetching:{{isFetching}}</div>
            <div>error:{{error}}</div>
            <pre lang="yaml">{{ data }}</pre>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from './AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { useFetch } from '@vueuse/core'
const { isFetching, error, data } = useFetch('/api/content/menus?api_access_key=kingofthekill').get().json()
console.log({isFetching, error, data})
</script>