<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>节流，useThrottle的别名</template>
        <template #codeEffect></template>
    </AvueUseBaseCom>
</template>
<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue';
// props
const props = defineProps<{
    id: number;
}>();

</script>