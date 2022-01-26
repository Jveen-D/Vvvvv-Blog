<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>将默认值应用于 ref。置为null和undefined都可以触发获取默认值</template>
        <template #codeEffect>
            <div class="flex flex-col gap-1">
                <pre lang="yaml">msg：{{ withDefaultValue }}</pre>
                <el-input v-model="withDefaultValue"></el-input>
                <el-button @click="setNull">setNull</el-button>
            </div>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { refDefault } from '@vueuse/core';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const msg = ref('')
const withDefaultValue: any = refDefault(msg, 'this is default value')
const setNull = () => {
    withDefaultValue.value = undefined
}
</script>