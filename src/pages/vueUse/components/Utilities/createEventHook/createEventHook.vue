<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>创建时间钩子函数</template>
        <template #codeEffect>
            
        </template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import {useMyFetch} from './createEventHook'
import AvueUseBaseCom from '../../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

const { onResult, onError } = useMyFetch()

onResult((result) => {
  console.log(result)
})

onError((error) => {
  console.error(error)
})


</script>