<!--
 * @Date: 2022-01-17 17:03:03
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/usePermission.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>权限信息</template>
        <template #codeEffect>
            <pre>{{ code }}</pre>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from './AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { usePermission } from '@vueuse/core'
import { computed, reactive } from 'vue'
import YAML from 'js-yaml'
const geolocation = usePermission('geolocation')
const microphone = usePermission('microphone')
const notifications = usePermission('notifications')
const camera = usePermission('camera')
const code = computed(() => YAML.dump(reactive({
    geolocation,
    microphone,
    notifications,
    camera,
})))
</script>