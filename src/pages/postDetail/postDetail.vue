<template>
  <div :class="[mode === 'light'?'bg-lightMode text-lightMode':'bg-darkMode  text-darkMode','md:mx-4 mt-28 rounded-2xl bg-white overflow-hidden mb-24']">
    <div class="flex flex-col items-center w-full overflow-x-none overflow-y-auto mt-6 md:mt-0 pb-8 md:pl-2 md:p-4">
      <div class="flex justify-center text-2xl font-medium subpixel-antialiased">
        {{ postDetail.title }}
      </div>
      <div class="flex justify-center text-sm my-4">
        <div class="flex items-center mr-4">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-rili"></use>
          </svg>
          <div>{{ createTime }}</div>
        </div>
        <div class="flex items-center mr-4">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tongji"></use>
          </svg>
          <div>字数统计:{{ postDetail.wordCount }}</div>
        </div>
        <div class="flex items-center">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-renshu"></use>
          </svg>
          <div>累计看过:{{ postDetail.visits }}</div>
        </div>
      </div>
      <div ref="markdownBody" class="max-w-screen-md w-screen markdown-body p-2 md:p-0 break-all">
      </div>
    </div>
  </div>
</template>

<script>
import { GetPostsById } from './postDetail'
import { useRouter } from 'vue-router'
import { reactive, toRefs, watch, computed } from 'vue'
import { useStore } from 'vuex'
import './postDetail.scss'
import '/src/assets/css/xcode.css'
import hljs from 'highlight.js'
import { getUpdateTime } from '/@/utils/date'

export default {
  name: 'postDetail',
  setup () {
    const Router = useRouter()
    const store = useStore()
    const state = reactive({
      id: computed(() => Router.currentRoute.value.params.id),
      postDetail:'',
      markdownBody:'',
      createTime:'',
      slug:computed(()=>store.state.slug),
      mode:computed(()=>store.state.mode)
    })
    let { id } = { ...toRefs(state) }

    watch(id, ( currentV ) => {
      if (currentV) {
        GetPostsById(currentV).then(( res ) => {
          state.postDetail = res
          state.createTime = getUpdateTime(state.postDetail.createTime)
          state.markdownBody.innerHTML += state.postDetail.formatContent
          store.dispatch('ChangeSlug', computed(()=>state.postDetail.categories[0].slug))
          let pre = Array.from(document.getElementsByTagName('pre'))
          pre.forEach(( item ) => {
            item.insertAdjacentHTML('beforebegin', '<figcaption class="line-numbers-head">' +
                '<div class="custom-carbon">' +
                '<div class="custom-carbon-dot custom-carbon-dot--red"></div>' +
                '<div class="custom-carbon-dot custom-carbon-dot--yellow"></div>' +
                '<div class="custom-carbon-dot custom-carbon-dot--green"></div>' +
                '</div>' +
                '</figcaption>')
            item.classList.add('line-numbers')
          })
          hljs.initHighlightingOnLoad()
        })
      }
    }, {
      immediate: true
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="scss">

</style>