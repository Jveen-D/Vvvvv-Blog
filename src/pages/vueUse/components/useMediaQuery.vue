<!--
 * @Date: 2022-01-17 16:40:38
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/useMediaQuery.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>video方面的暂时用不到，就先不写了</template>
        <template #codeEffect>
            
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from './AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

</script>