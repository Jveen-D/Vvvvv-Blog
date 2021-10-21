<template>
  <!--全局阴影-->
  <teleport to="#app">
    <transition name="appear">
      <div v-if="shadow"
           :class="['shadow fixed top-0 right-0 bottom-0 left-0 z-50']"
           @click="hiddenShadow"
      >
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import {computed, reactive, toRefs} from "vue";
import {useStore} from "vuex";

const store = useStore();

const state = reactive({
  shadow: computed(() => store.state.shadow),
});
const {shadow} = toRefs(state);

//隐藏阴影
const hiddenShadow = () => {
  store.dispatch('ChangeShadow', false);
};
</script>

<style lang="scss" scoped>
@import "./shadow";
</style>
