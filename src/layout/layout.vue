<template>
  <Header ></Header>
  <div :class="[mode === 'dark'?'darkMode':'bg-gradient-to-tr from-regal-blue to-regal-pink','flex']">
    <div class="flex-1 w-screen overflow-scroll md:overflow-visible">
      <router-view></router-view>
    </div>
    <Profile></Profile>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Profile from '@/components/Profile/Profile.vue'
import { computed, reactive, toRefs } from "vue"
import { useStore } from 'vuex'

export default {
  name: 'Layout',
  components: { Header, Profile },
  setup () {
    const store = useStore()
    const state = reactive({
      mode: computed(() => store.state.mode)
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="scss">
@import "./src/assets/css/mode.scss";
</style>