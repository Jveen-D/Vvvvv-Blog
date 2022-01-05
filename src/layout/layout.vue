<!--
 * @Date: 2022-01-05 17:00:45
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/layout/layout.vue
-->
<template>
  <Header />
  <div class="flex bg-white dark:bg-gray-900">
    <div
      ref="backTopEle"
      class="h-[100vh] flex w-full"
      @scroll="getScroll($event)"
    >
      <router-view
        class="flex-1 overflow-y-auto lg:mt-16 animate__animated animate__fadeInLeftBig"
      />
    </div>
    <!--右侧的profile-->
    <Profile />
  </div>
  <!--回到顶部的动画-->
  <div
    id="backTop"
    :class="[
      state.showBackTop ? 'showBackTop' : '',
      state.showBackTop === false ? 'hiddenBackTop' : '',
      'hidden lg:block fixed -top-full right-10 w-20 h-screen',
    ]"
    @click="backToTop"
  ></div>
  <Shadow />
</template>

<script lang="ts" setup>
  import Header from '/@/components/Header/Header.vue';
  import Profile from '/@/components/Profile/Profile.vue';
  import Shadow from '/@/components/Shadow/Shadow.vue';
  import { reactive, toRefs } from 'vue';

  interface State {
    showBackTop: boolean | '';
    showBackTopBool: boolean;
    backTopEle: any;
  }

  const state = reactive<State>({
    showBackTop: '',
    showBackTopBool: false,
    backTopEle: null,
  });
  const { backTopEle } = toRefs(state);
  const getScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    if (scrollTop >= 200) {
      state.showBackTopBool = true;
      state.showBackTop = true;
    }
    if (scrollTop < 200) {
      if (state.showBackTopBool) {
        state.showBackTop = false;
      }
    }
  };
  const backToTop = () => {
    let top = state.backTopEle.scrollTop;
    const backTopTimer = setInterval(() => {
      top -= top / 10;
      state.backTopEle.scrollTo({
        top,
      });
      if (top <= 0.1) {
        clearInterval(backTopTimer);
      }
    });
  };
</script>

<style scoped lang="scss">
  @import '/src/assets/css/mode';
  @import '/src/assets/css/backTop';
</style>
