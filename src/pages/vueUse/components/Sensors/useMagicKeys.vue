<!--
 * @Date: 2022-01-19 09:23:13
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/Sensors/useMagicKeys.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>魔术键，反应键按下状态，具有神奇的组合键支持</template>
        <template #codeEffect>
            <div class="flex flex-wrap justify-around">
                <div
                    :class="[shift ? 'text-[#42b883]' : 'text-[#213547]', 'flex justify-center items-center px-4 py-2 rounded-sm bg-gray-600 bg-opacity-10 dark:bg-gray-400 dark:bg-opacity-10']"
                >shift</div>
                <div
                    :class="[v ? 'text-[#42b883]' : 'text-[#213547]', 'flex justify-center items-center px-4 py-2 rounded-sm bg-gray-600 bg-opacity-10 dark:bg-gray-400 dark:bg-opacity-10']"
                >v</div>
                <div
                    :class="[u ? 'text-[#42b883]' : 'text-[#213547]', 'flex justify-center items-center px-4 py-2 rounded-sm bg-gray-600 bg-opacity-10 dark:bg-gray-400 dark:bg-opacity-10']"
                >u</div>
                <div
                    :class="[s ? 'text-[#42b883]' : 'text-[#213547]', 'flex justify-center items-center px-4 py-2 rounded-sm bg-gray-600 bg-opacity-10 dark:bg-gray-400 dark:bg-opacity-10']"
                >s</div>
                <div
                    :class="[e ? 'text-[#42b883]' : 'text-[#213547]', 'flex justify-center items-center px-4 py-2 rounded-sm bg-gray-600 bg-opacity-10 dark:bg-gray-400 dark:bg-opacity-10']"
                >e</div>
                <div
                    :class="[v_u_e ? 'text-[#42b883]' : 'text-[#213547]', 'flex justify-center items-center px-4 py-2 rounded-sm bg-gray-600 bg-opacity-10 dark:bg-gray-400 dark:bg-opacity-10']"
                >v_u_e</div>
                <div
                    :class="[u_s_e ? 'text-[#42b883]' : 'text-[#213547]', 'flex justify-center items-center px-4 py-2 rounded-sm bg-gray-600 bg-opacity-10 dark:bg-gray-400 dark:bg-opacity-10']"
                >u_s_e</div>
            </div>
            <div class="flex items-center h-[40px]">
                <div v-for="(key,index) in current" class="font-mono">
                    <span class="px-2">{{ index === 0 ? '' : '+' }}</span>
                    {{ key }}
                </div>
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

import { useMagicKeys } from '@vueuse/core'

const { shift, v, u, e, s, v_u_e, u_s_e, current } = useMagicKeys()
</script>