<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>Apply reactifyto an object</template>
        <template #codeEffect>api有点疑问  还不知道怎么用</template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
// import { ref } from 'vue'
// import { reactifyObject } from '@vueuse/core';
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();


</script>