<!--
 * @Date: 2022-01-18 16:50:14
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/components/Sensors/useGeolocation.vue
-->
<template>
    <AvueUseBaseCom :id="props.id">
        <template #des>地理位置</template>
        <template #codeEffect>
            <div v-if="isSupported">
                <pre lang="json">{{
                    JSON.stringify(
                        {
                            coords: {
                                accuracy: coords.accuracy,
                                latitude: coords.latitude,
                                longitude: coords.longitude,
                                altitude: coords.altitude,
                                altitudeAccuracy: coords.altitudeAccuracy,
                                heading: coords.heading,
                                speed: coords.speed,
                            },
                            locatedAt,
                            error: error ? error.message : error,
                        },
                        void 0,
                        2
                    )
                }}</pre>
            </div>
            <div v-else>web程序暂不支持此api</div>
        </template>
    </AvueUseBaseCom>
</template>

<script lang="ts" setup>
import AvueUseBaseCom from '../AvueUseBaseCom.vue'
// props
const props = defineProps<{
    id: number;
}>();

import { useGeolocation } from '@vueuse/core'
const { isSupported, coords, locatedAt, error } = useGeolocation()
</script>