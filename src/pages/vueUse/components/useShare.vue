<!--
 * @Date: 2022-01-18 10:58:27
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useShare.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>分享，很多浏览器都不支持，谷歌浏览器也不支持，最好到Safari浏览器体验</template>
        <template #codeEffect>
            <div v-if="isSupported">
                <el-button @click="startShare">share</el-button>
            </div>
            <div v-else>useShare is not supported</div>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from './AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { useShare } from '@vueuse/core'

const { share, isSupported } = useShare()

const startShare = () => {
    share({
        title: 'Hello',
        text: 'Hello my friend!',
        url: location.href,
    })
}

</script>