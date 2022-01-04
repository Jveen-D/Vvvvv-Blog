<template>
  <Header />
  <div class="flex bg-white dark:bg-gray-900">
    <div
      ref="backTopEle"
      :class="[isIOS ? '' : 'h-[100vh]', 'wrap flex lg:min-w-1080 ']"
      @scroll="getScroll($event)"
    >
      <router-view class="w-full h-full overflow-y-auto animate__animated animate__fadeInLeftBig" />
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
  import { reactive, toRefs, ref, onMounted } from 'vue';

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
  // 浏览器检测 来自vue工具函数 地址https://github.com/vuejs/vue/blob/dev/dist/vue.runtime.esm.js
  const inBrowser = typeof window !== 'undefined';
  // @ts-ignore
  const inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
  // @ts-ignore
  const weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
  const UA = inBrowser && window.navigator.userAgent.toLowerCase();
  const isIOS = ref((UA && /iphone|ipad|ipod|ios/.test(UA)) || weexPlatform === 'ios');

  const safariHacks = () => {
    let windowsVH = window.innerHeight; // 返回窗口的文档显示区的高度
    // @ts-ignore
    document.querySelector('.wrap').style.setProperty('--vh', windowsVH + 'px'); // 设置css变量
    // 监听resize时间，回调函数同上
    window.addEventListener('resize', () => {
      // @ts-ignore
      document.querySelector('.wrap').style.setProperty('--vh', windowsVH + 'px');
    });
  };
  // 挂在之后执行
  onMounted(() => {
    safariHacks();
  });
</script>

<style scoped lang="scss">
  @import '/src/assets/css/mode';
  @import '/src/assets/css/backTop';
  /* 引用css变量 */
  .wrap {
    height: var(--vh);
  }
</style>
