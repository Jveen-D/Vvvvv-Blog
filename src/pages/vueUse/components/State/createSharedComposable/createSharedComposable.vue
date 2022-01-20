<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>多个组件共享一个状态</template>
        <template #codeEffect>
            <div class="flex">
                <comA class="flex-1"></comA>
                <comB class="flex-1"></comB>
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

import comA from './comA.vue'
import comB from './comB.vue'

</script>