<template>
  <suspense>
    <Index/>
  </suspense>
</template>

<script>
import Index from '/@/pages/index.vue'

export default {
  name: 'App',
  components: { Index }
}
</script>
