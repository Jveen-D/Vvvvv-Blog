<template>
  <div class="w-full h-screen mt-20">
    {{ a }}
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: '404',
  setup() {
    const a = ref('404')
    return {
      a
    }
  }
}
</script>

<style scoped>

</style>
