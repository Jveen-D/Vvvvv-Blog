<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>响应式时间表达转换</template>
        <template #codeEffect>
            <div class="text-center text-primary">{{ timeAgo }}</div>
            <el-slider v-model="slider" :min="-3800" :max="3800"></el-slider>
            <div class="text-center opacity-50">{{ slider ** 3 }}ms</div>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useTimeAgo } from '@vueuse/core';
import { timestamp } from '@vueuse/shared'
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const slider = ref(0)
const value = computed(() => timestamp() + slider.value ** 3)
const timeAgo = useTimeAgo(value)

</script>