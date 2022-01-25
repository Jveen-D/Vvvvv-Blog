<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>带过滤函数的监听</template>
        <template #codeEffect>
            <pre lang="yaml">字符串长度：{{str.length}}</pre>
            <pre lang="yaml">str：{{ str }}</pre>
            <pre lang="yaml">只监听长度为10以内的字符串</pre>
            <el-input class="w-[200px]" v-model="input"></el-input>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { watchWithFilter } from '@vueuse/core';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const input = ref('')
const str = ref('')
const stop = ref(false)

watchWithFilter(input, () => {
    str.value = input.value
}, {
    // eventFilter: debounceFilter(500)
    eventFilter: (fn) => {
        // 这里的fn代表watchWithFilter中的第二个参数
        if (input.value.length > 10) {
            stop.value = true
        } else {
            fn()
        }
    }
})
</script>