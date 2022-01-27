<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>先安装下依赖 pnpm i @vueuse/integrations</template>
        <template #codeEffect>
            <pre>locale: {{ cookies.get('locale') }}</pre>
            <pre>{{ cookies.getAll() }}</pre>   
            <el-button @click="cookies.set('locale', 'ru-RU')">Russian</el-button>
            <el-button @click="cookies.set('locale', 'en-US')">English</el-button>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import { useCookies } from '@vueuse/integrations/useCookies'
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const cookies = useCookies(['locale'])
</script>