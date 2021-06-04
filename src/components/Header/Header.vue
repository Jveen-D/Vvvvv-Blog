<template>
  <div
      class="flex justify-center items-center animate-pulse rounded-md fixed top-2 left-4 w-8 h-8 border-solid border-2 border-gray-400"
      @click="showCategoriesList">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-gengduo"></use>
    </svg>
  </div>
  <div
      :class="[
          showList ? 'showList' : 'w-0',
          showList === false ?'hiddenList' : '',
          mode === 'light'?'lightMode bg-gradient-to-t from-regal-blue to-regal-pink':'darkMode ',
          'h-screen overflow-hidden items-center fixed top-0 bg-white ' +
          'md:w-2/4 md:flex md:h-20 md:w-full md:bg-opacity-70']">
    <div class="md:hidden relative mt-4" @click="showCategoriesList">
      <svg class="icon animate-bounce absolute right-4" aria-hidden="true">
        <use xlink:href="#icon-cha"></use>
      </svg>
    </div>
    <div class="hidden md:malfunction">
      <div>Vvvvv-Blog</div>
    </div>
    <div class="flex flex-col flex-1 justify-between items-center pr-6
                md:flex-row md:h-20">
      <div class="pl-12 pt-4
                  md:flex md:pt-0">
        <div v-for="(item,index) in listCategories"
             :key="'listCategories'+index"
             :class="[slug === item.slug?'text-blue-700':'','whitespace-nowrap mt-2 md:mt-0 font-medium text-sm pr-4']"
             @click="goCategory(index,item.slug)">
          {{ item.name }}
        </div>
      </div>
      <div class="w-full justify-end md:justify-between md:w-auto flex items-center" @click="changeMode">
        <div class="relative flex justify-between items-center w-20 h-8 bg-gray-100 rounded-md">
          <div class="z-20 flex justify-center items-center w-10 h-full rounded-md">
            <svg :class="[mode === 'light'?'animate-bounce mt-1':'','icon']" aria-hidden="true">
              <use xlink:href="#icon-taiyang"></use>
            </svg>
          </div>
          <div class="z-20 flex justify-center items-center w-10 h-full">
            <svg :class="[mode === 'light'?'':'animate-bounce mt-1','icon']" aria-hidden="true">
              <use xlink:href="#icon-yueliang"></use>
            </svg>
          </div>
          <div
              :class="[mode === 'light'?'light':'dark','z-10 absolute flex justify-center items-center bg-white w-10 h-8 rounded-md']">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ListCategories } from './Header'
import { reactive, toRefs, computed, watch } from "vue"
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'Header',
  setup () {
    const Router = useRouter()
    const store = useStore()
    const state = reactive({
      slug: computed(() => store.state.slug),
      mode: computed(() => store.state.mode),
      listCategories:'',
      activeCategory:computed(() => Router.currentRoute.value.params.slug),// 目前所在slug分类
      showList: ''
    })
    let {activeCategory} = {...toRefs(state)}

    // 目前所在slug分类
    watch(activeCategory, () => {
      store.dispatch('ChangeSlug', activeCategory)
    }, {
      immediate: true
    })

    // 点击分类切换
    const goCategory = ( index, val ) => {
      Router.push({
        path: `/category/${ val }`,
      })
    }

    // 文章分类
    ListCategories().then(( res ) => {
      state.listCategories = res
    })
    // 切换主题模式
    const changeMode = () => {
      let mode = store.state.mode === 'light' ? 'dark' : 'light'
      store.dispatch('ChangeMode', mode)
    }
    // 移动端显示分类
    const showCategoriesList = () => {
      state.showList = !state.showList
    }
    return {
      goCategory,
      changeMode,
      showCategoriesList,
      ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="scss">
@import "Header.scss";
</style>