<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>计算注入，computedInject替换inject，在获取到注入属性时执行自定义的计算函数</template>
        <template #codeEffect>
            <div class="flex">
                <div>
                    <div>Provider</div>
                    <pre lang="yaml">{{ array }}</pre>
                </div>
                <Receiver></Receiver>
            </div>
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import AvueUseBaseCom from '../../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { provide, ref } from 'vue'
import Receiver, { ArrayKey } from './receiverCom.vue'

const array = ref([{ key: 1, value: '1' }, { key: 2, value: '2' }, { key: 3, value: '3' }])
provide(ArrayKey, array)
</script>