<template>
  <!--全局阴影-->
  <div :class="[
      shadow ? 'showShadow' : '',
      shadow === false ? 'hiddenShadow':'',
      'animate__animated shadow fixed top-0 right-0 bottom-0 left-0 z-50']"
       @click="hiddenShadow"
  >{{ shadow }}</div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import {computed, reactive, toRefs} from "vue";
const store = useStore();
const state = reactive({
  shadow:computed(() => store.state.shadow),
});
const { shadow } = toRefs(state);
//隐藏阴影
const hiddenShadow = () => {
  store.dispatch('ChangeShadow', false);
}
</script>

<style lang="scss" scoped>
@import "./shadow";
</style>
