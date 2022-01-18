<!--
 * @Date: 2022-01-18 14:15:45
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/Sensors/onStartTyping.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>onStartTyping当用户开始在不可编辑的元素上输入时触发。</template>
        <template #codeEffect>
            <div>
                <el-input ref="input" disabled v-model="a" class="w-[240px]" type="text" placeholder="Start typing to focus" />
                <span>尝试在上面的输入框输入会触发onStartTyping中的回调函数</span>
            </div>
            <div class="mt-2">
                <el-input v-model="b" class="w-[240px]" type="text" placeholder="Start typing has no effect here" />
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
import { onStartTyping } from '@vueuse/core'

const a = ref('')
const b = ref('')
const input = ref<ElRef>(null)
onStartTyping(() => {
    alert('this input is disabled.')
    console.log('this input is disabled.')
    if (!input.value.active)
        input.value.focus()
})
</script>