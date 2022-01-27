<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>布尔切换器useToggle，并且值默认为false</template>
        <template #codeEffect>
            <pre lang="yaml">切换布尔值</pre>
            <pre lang="yaml">value:{{ value }}</pre>
            <el-button @click="toggle">toggle</el-button>
            <div class="mt-4"></div>
            <pre lang="yaml">bool:{{ bool }}</pre>
            <el-button @click="toggleBool">toggleBool</el-button>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useToggle } from '@vueuse/core'
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();
// 默认为false
const [value, toggle] = useToggle()

const bool = ref(true)
// 只传递一个ref时，将返回一个简单的切换函数
const toggleBool = useToggle(bool)

</script>