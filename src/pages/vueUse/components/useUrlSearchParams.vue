<!--
 * @Date: 2022-01-18 11:15:22
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useUrlSearchParams.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>url params</template>
        <template #codeEffect>
            <pre lang="yaml">useUrlSearchParams：{{ params }}</pre>
            <pre lang="yaml">Router：{{ query }}</pre>
            <pre lang="yaml">从地址栏可以看出，当前的参数已经被添加上了，并且可以被Router识别</pre>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from './AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();
import {ref} from 'vue'
import { useRouter } from 'vue-router';
import { useUrlSearchParams } from '@vueuse/core'

const Router = useRouter();

const params = useUrlSearchParams('history')

params.foo = 'bar'
params.vueuse = 'awesome'

const query = ref(Router.currentRoute.value.query)

</script>