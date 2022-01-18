<!--
 * @Date: 2022-01-18 13:23:08
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useWebNotification.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>通知，pc浏览器一般是支持的，手机浏览器支持的比较少</template>
        <template #codeEffect>
            <div v-if="isSupported">
                <el-button @click="() => show()">show</el-button>
                <el-button @click="() => close()">close</el-button>
                <el-button @click="showNotification">showNotification</el-button>
            </div>
            <div v-else>暂不支持web程序调用此api</div>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { useWebNotification } from '@vueuse/core'
const {
    isSupported,
    notification,
    show,
    close
} = useWebNotification({
    title: 'Hello, VueUse world!',
    dir: 'auto',
    lang: 'en',
    renotify: false,
})
const showNotification = () => {
    console.log(notification.value)
}
</script>