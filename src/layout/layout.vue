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
      :class="[isIOS ? '' : 'h-screen', 'wrap flex-1 lg:h-screen-90vh overflow-y-scroll']"
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
  import { computed, reactive, toRefs, ref, onMounted } from 'vue';
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
  // 浏览器检测 来自vue工具函数 地址https://github.com/vuejs/vue/blob/dev/dist/vue.runtime.esm.js
  const inBrowser = typeof window !== 'undefined';
  // eslint-disable-next-line no-undef
  const inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  // eslint-disable-next-line no-undef
  const weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  const UA = inBrowser && window.navigator.userAgent.toLowerCase();
  // const isIE = UA && /msie|trident/.test(UA);
  // const isIE9 = UA && UA.indexOf('msie 9.0') > 0;
  // const isEdge = UA && UA.indexOf('edge/') > 0;
  // const isAndroid = (UA && UA.indexOf('android') > 0) || weexPlatform === 'android';
  const isIOS = ref((UA && /iphone|ipad|ipod|ios/.test(UA)) || weexPlatform === 'ios');
  // const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
  // const isPhantomJS = UA && /phantomjs/.test(UA);
  // const isFF = UA && UA.match(/firefox\/(\d+)/);

  const safariHacks = () => {
    let windowsVH = window.innerHeight / 100;
    document.querySelector('.wrap').style.setProperty('--vh', windowsVH + 'px');
    window.addEventListener('resize', function () {
      document.querySelector('.wrap').style.setProperty('--vh', windowsVH + 'px');
    });
  };
  onMounted(() => {
    safariHacks();
  });
</script>

<style scoped lang="scss">
  @import '@/assets/css/mode';
  @import '@/assets/css/backTop';
  .wrap {
    height: 100vh; /*給 Safari 以外的瀏覽器讀取*/
    height: calc(var(--vh, 1vh) * 100);
  }
</style>
