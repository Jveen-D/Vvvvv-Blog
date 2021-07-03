<template>
  <Header></Header>
  <div
    ref="backTopEle"
    :class="[mode === 'dark'?'darkMode':'bg-gradient-to-tr from-regal-blue to-regal-pink','flex overflow-y-auto']"
    @scroll="getScroll($event)">
    <div class="flex-1 w-screen h-screen ">
      <router-view></router-view>
    </div>
    <Profile></Profile>
  </div>
  <!--回到顶部的动画-->
  <div
    id="backTop"
    :class="[showBackTop?'showBackTop':'',
             showBackTop === false?'hiddenBackTop':'','hidden md:block fixed -top-full right-10 w-20 h-screen bg-red-200']"
    @click="backToTop">
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Profile from '@/components/Profile/Profile.vue'
import { computed, reactive, toRefs, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Layout',
  components: { Header, Profile },
  setup() {
    const store = useStore()
    const state = reactive({
      mode: computed(() => store.state.mode),
      showBackTop: ref(''),
      showBackTopBool: false,
      backTopEle: ref(null)
    })

    const getScroll = (e) => {
      const scrollTop = e.target.scrollTop
      if (scrollTop >= 200) {
        state.showBackTopBool = true
        state.showBackTop = true
      }
      if (scrollTop < 200) {
        if (state.showBackTopBool) {
          state.showBackTop = false
        }
      }
    }
    const backToTop = () => {
      let top = state.backTopEle.scrollTop
      const backTopTimer = setInterval(() => {
        top -= top / 10
        state.backTopEle.scrollTo({
          top
        })
        if (top <= 0.1) {
          clearInterval(backTopTimer)
        }
      })

    }
    return {
      ...toRefs(state),
      getScroll,
      backToTop
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/css/mode";
@import "@/assets/css/backTop";
</style>
