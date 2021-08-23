<template>
  <Header />
  <div
    :class="[
      mode === 'dark' ? 'darkMode' : 'bg-gradient-to-tr from-regal-blue to-regal-pink',
      'flex',
    ]"
  >
    <div
      ref="backTopEle"
      class="flex-1 h-screen lg:h-screen-90vh overflow-y-scroll"
      @scroll="getScroll($event)"
    >
      <router-view class="animate__animated animate__fadeInLeftBig" />
    </div>
    <!--右侧的profile-->
    <Profile />
  </div>
  <!--回到顶部的动画-->
  <div
    id="backTop"
    :class="[
      showBackTop ? 'showBackTop' : '',
      showBackTop === false ? 'hiddenBackTop' : '',
      'hidden lg:block fixed -top-full right-10 w-20 h-screen',
    ]"
    @click="backToTop"
  ></div>
</template>

<script setup>
  import Header from '@/components/Header/Header.vue';
  import Profile from '@/components/Profile/Profile.vue';
  import { computed, reactive, toRefs, ref } from 'vue';
  import { useStore } from 'vuex';

  const store = useStore();
  const state = reactive({
    mode: computed(() => store.state.mode),
    showBackTop: '',
    showBackTopBool: false,
    backTopEle: null,
  });
  const { mode, showBackTop, backTopEle } = toRefs(state);
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
  @import '@/assets/css/mode';
  @import '@/assets/css/backTop';
</style>
