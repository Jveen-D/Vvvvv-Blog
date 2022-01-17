<!--
 * @Date: 2022-01-17 13:08:28
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useFavicon.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>路径为响应式变量</template>
        <template #codeEffect>
            <img class="mb-2 min-w-[200px] max-w-[200px] min-h-[240px] max-h-[240px]" :src="icon || ''" />
            <el-button @click="change">change</el-button>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from './AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

/**
 * 路径为响应式变量，但是要将静态资源放到public文件夹下，
 * 否则打包以后会找不到资源，因为不像vue2可以使用require引入静态资源
 * */
import { useFavicon } from '@vueuse/core'
const icon = useFavicon()
icon.value = '/img/bg.gif'
const change = () => {
    if (icon.value === '/img/bg.gif')
        icon.value = '/img/bg2.gif'
    else icon.value = '/img/bg.gif'
}
</script>