<template>
    <div class="border border-gray-200 border-opacity-50">
        <strong>comA</strong>
        <pre lang="yaml">{{useSharedMouse()}}</pre>
    </div>
</template>

<script lang="ts" setup>
import {useSharedMouse} from './publicShared'
</script>