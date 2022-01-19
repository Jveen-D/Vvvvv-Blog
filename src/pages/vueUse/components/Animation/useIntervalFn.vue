<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>拥有回调的计时器</template>
        <template #codeEffect>
            <div class="flex flex-col items-center justify-center ">
                <div class="text-sky-500 dark:text-sky-400">{{ word }}</div>
                <el-button v-if="!isActive" @click="() => resume()">开始</el-button>
                <el-button v-if="isActive" @click="() => pause()" class="text-white bg-orange-400 border border-orange-400 hover:text-sky-500">暂停</el-button>
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
import { useIntervalFn } from '@vueuse/core'
const greetings = ['Hello', 'Hi', 'Yo!', 'Hey', 'Hola', 'こんにちは', 'Bonjour', 'Salut!', '你好']
const word = ref('Hello')
const { pause, resume, isActive } = useIntervalFn(() => {
    word.value = greetings[Math.round(Math.random() * (greetings.length - 1))]
}, 1000)
</script>