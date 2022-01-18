<!--
 * @Date: 2022-01-18 13:45:50
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/Sensors/onKeyStroke.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>onClickOutside元素外点击</template>
        <template #codeEffect>
            <div class="container border border-blue-300">
                <div
                    class="ball"
                    :style="{ transform: `translate(${translateX}px, ${translateY}px)` }"
                />
            </div>
            <div
                class="text-center mt-4"
            >Use the arrow keys or w a s d keys to control the movement of the ball.</div>

            <div class="text-center mt-4">
                See this table for
                <a
                    target="blank"
                    class="text-sky-500 dark:text-sky-400'"
                    href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values"
                >all key</a> codes.
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
import { onKeyStroke } from '@vueuse/core'
const translateX = ref(0)
const translateY = ref(0)

onKeyStroke(['w', 'W', 'ArrowUp'], (e: KeyboardEvent) => {
    translateY.value -= 10
    e.preventDefault()
})
onKeyStroke(['s', 'S', 'ArrowDown'], (e: KeyboardEvent) => {
    translateY.value += 10
    e.preventDefault()
})
onKeyStroke(['a', 'A', 'ArrowLeft'], (e: KeyboardEvent) => {
    translateX.value -= 10
    e.preventDefault()
})
onKeyStroke(['d', 'D', 'ArrowRight'], (e: KeyboardEvent) => {
    translateX.value += 10
    e.preventDefault()
})
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 400px;
    height: 100px;
    margin: auto;
    overflow: hidden;
    border: 1px solid #a1a1a130;
    border-radius: 5px;
}
.ball {
    width: 16px;
    height: 16px;
    background: #a1a1a1;
    border-radius: 50%;
}
</style>