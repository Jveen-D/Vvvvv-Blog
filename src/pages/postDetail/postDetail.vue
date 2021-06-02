<template>
  <div class="h-screen mx-4 pt-28">
    <div class="flex flex-col items-center h-full w-full overflow-y-auto pb-8 bg-white p-4 rounded-lg">
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
      <div ref="markdownBody" class="max-w-screen-md w-full markdown-body">
      </div>
    </div>
  </div>
</template>

<script>
import { GetPostsById } from './postDetail'
import { useRouter } from 'vue-router'
import { watch, computed, ref } from 'vue'
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
    const id = computed(() => Router.currentRoute.value.params.id)
    let postDetail = ref('')
    let markdownBody = ref(null)
    let createTime = ref('')
    let slug = computed({
      get: () => store.getters.getSlug,
      set: ( val ) => store.dispatch('ChangeSlug', val)
    })

    watch(id, ( currentV, preV ) => {
      if(currentV){
        GetPostsById(currentV).then(( res ) => {
          postDetail.value = res
          createTime.value = getUpdateTime(postDetail.value.createTime)
          slug.value = computed(()=>postDetail.value.categories[0].slug)
          markdownBody.value.innerHTML += postDetail.value.formatContent
          let pre = Array.from(document.getElementsByTagName('pre'))
          pre.forEach(( item, index ) => {
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
      markdownBody,
      postDetail,
      createTime
    }
  }
}
</script>

<style scoped lang="scss">
</style>