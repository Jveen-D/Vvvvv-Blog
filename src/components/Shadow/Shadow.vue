<template>
  <!--全局阴影-->
  <teleport to="#app">
    <transition name="appear">
      <div
        v-if="state.shadow"
        :class="['shadow fixed top-0 right-0 bottom-0 left-0 z-50']"
        @click="hiddenShadow"
      >
        <img
          class="moveImg absolute"
          :style="{
            width: state.shadowImg.width + 'px',
            height: state.shadowImg.height + 'px'
          }"
          :src="state.shadowImg.src"
        />
      </div>
    </transition>
  <p>123</p>
  </teleport>
  <p>123</p>
</template>

<script setup lang="ts">
import { computed, ComputedRef, reactive } from "vue";
import { useStore } from "vuex";

const store = useStore();
interface State {
  shadow: ComputedRef<boolean>,
  shadowImg: ComputedRef<{
    width: number,
    height: number,
    left: number,
    top: number,
    src: string
  }>,
  left: ComputedRef<string>,
  top: ComputedRef<string>,
}
const state = reactive<State>({
  shadow: computed(() => store.state.shadow),
  shadowImg: computed(() => store.state.shadowImg),
  top: computed(() =>store.state.shadowImg.top + 'px'),
  left:computed(() => store.state.shadowImg.left + 'px') ,
});
//隐藏阴影
const hiddenShadow = () => {
  store.dispatch('ChangeShadow', false);
  console.log(state.shadowImg);
};

const theme = {
  color: 'red',
  left:'20px'
}
</script>

<style lang="scss" scoped>
@import "Shadow";
img{
  top:v-bind('theme.left');
  // left:v-bind('state.left');
}
p {
  padding-left: v-bind('theme.left');;
  color: v-bind('theme.color');
}
</style>