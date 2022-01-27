<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>先安装下依赖 pnpm i @vueuse/integrations </template>
        <template #codeEffect>
            <pre lang="yaml">isFinished:{{ isFinished }}</pre>
            <pre lang="yaml">data:{{ data }}</pre>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { useAxios } from '@vueuse/integrations/useAxios'
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const { data, isFinished } = useAxios('/api/content/menus?api_access_key=kingofthekill', { method: 'GET' })
</script>