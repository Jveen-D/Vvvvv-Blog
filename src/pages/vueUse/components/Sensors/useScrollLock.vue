<!--
 * @Date: 2022-02-11 15:13:44
 * @LastEditors: dwj18066042960
 * @FilePath: \Vvvvv-Blog\src\pages\vueUse\components\Sensors\useScrollLock.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template
            #des
        >滚动区域锁定,这个api需要自己设置容器的overflow:hidden属性，否则就会导致没有效果，并且不可以使用tailwind css提供的类名，因为tailwind css类名优先级太高会覆盖容器的行内样式style，从而导致此api失效</template>
        <template #codeEffect>
            <div class="flex">
                <div
                    v-scroll-lock="isLocked"
                    class="bg-gray-200 w-[260px] h-[420px] customOverflow"
                >
                    <div class="w-[400px] h-[600px] relative">
                        <span class="absolute top-0 left-0 text-sky-500 dark:text-sky-400">left top</span>
                        <span
                            class="absolute top-0 right-0 text-sky-500 dark:text-sky-400"
                        >right top</span>
                        <span
                            class="absolute right-0 top-1/2 text-sky-500 dark:text-sky-400"
                        >left middle</span>
                        <span
                            class="absolute left-0 top-1/2 text-sky-500 dark:text-sky-400"
                        >right middle</span>
                        <span
                            class="absolute bottom-0 right-0 text-sky-500 dark:text-sky-400"
                        >right button</span>
                        <span
                            class="absolute bottom-0 left-0 text-sky-500 dark:text-sky-400"
                        >left bottom</span>
                    </div>
                </div>
                <div class="flex flex-col items-center flex-1">
                    <pre lang="yaml">是否锁定：{{ isLocked }}</pre>
                    <el-button @click="toggleLock()">点击{{ isLocked ? '解锁' : '锁定' }}</el-button>
                </div>
            </div>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { vScrollLock } from '@vueuse/components';
import { useToggle } from '@vueuse/core';
import { ref } from 'vue';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const isLocked = ref(false)
const toggleLock = useToggle(isLocked)
</script>
<style scoped>
.customOverflow {
    overflow: scroll;
}
</style>