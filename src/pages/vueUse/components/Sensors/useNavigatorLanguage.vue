<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>用户语言首选项</template>
        <template #codeEffect>
            <pre lang="yaml">{{language}}</pre>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import {reactive} from 'vue'
import { useNavigatorLanguage } from '@vueuse/core'

const language = reactive(useNavigatorLanguage())
</script>