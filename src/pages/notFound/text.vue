<template>
  <teleport to="#test">
      <p>hello</p>
  </teleport>
</template>

<script setup lang="ts">
const theme = {
  color: 'red'
}
</script>

<style lang="scss" scoped>
p {
  color: v-bind('theme.color');
}
</style>