<template>
  <div
    :class="[mode === 'light'?'bg-lightMode text-lightMode':'bg-darkMode  text-darkMode','md:mx-4 mt-28 rounded-2xl bg-white font-mersan overflow-hidden mb-24 duration-500 ease-in-out']">
    <div class="flex flex-col items-center w-full overflow-x-none overflow-y-auto mt-6 md:mt-0 pb-8 md:pl-2 md:p-4">
      <div class="flex justify-center text-2xl subpixel-antialiased transition-colors hover:text-FF9100">
        {{ postDetail.title }}
      </div>
      <div class="flex flex-col items-center md:flex-row md:justify-center text-sm my-4">
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
import { getUpdateTime } from '@/utils/date'

export default {
  name: 'PostDetail',
  setup() {
    const Router = useRouter()
    const store = useStore()
    const state = reactive({
      id: computed(() => Router.currentRoute.value.params.id),
      postDetail: '',
      markdownBody: '',
      createTime: '',
      slug: computed(() => store.state.slug),
      mode: computed(() => store.state.mode)
    })
    const { id } = { ...toRefs(state) }
    watch(id, (currentV) => {
      if (currentV) {
        GetPostsById(currentV).then((res) => {
          state.postDetail = res
          document.title = `Vvvvv-Blog! - ` + state.postDetail.title
          state.createTime = getUpdateTime(state.postDetail.createTime)
          state.markdownBody.innerHTML += state.postDetail.formatContent
          store.dispatch('ChangeSlug', computed(() => state.postDetail.categories[0].slug))
          const pre = Array.from(document.getElementsByTagName('pre'))
          code = Array.from(document.querySelectorAll('pre code'))
          pre.forEach((item, index) => {
            const language = item.children[0].classList[0].split('-')[1].toUpperCase()
            const html = `<figcaption class="line-numbers-head">
              <div class="custom-carbon">
                <div class="custom-carbon-dot custom-carbon-dot--red"></div>
                <div class="custom-carbon-dot custom-carbon-dot--yellow"></div>
                <div class="custom-carbon-dot custom-carbon-dot--green"></div>
              </div>
              <div class="language">${language}</div>
              <a class="copy" onclick="copy(${index})" title="点击复制">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-fuzhi"></use>
                </svg>
              </a>
            </figcaption>`
            item.insertAdjacentHTML('beforebegin', html)
            item.classList.add('line-numbers')
          })
          // eslint-disable-next-line no-undef
          hljs.initHighlightingOnLoad()
        })
      }
    }, {
      immediate: true
    })
    let code
    window.copy = (index) => {
      const ele = document.createElement('div')
      ele.innerHTML = code[index].innerHTML
      let copyStr = ''
      Array.from(ele.innerText).forEach((item) => {
        copyStr += item
      })
      const textarea = document.createElement('textarea')
      document.body.appendChild(textarea)
      textarea.value = copyStr
      textarea.select()
      document.execCommand('Copy') // 执行浏览器复制命令
      document.body.removeChild(textarea)
      alert('已复制')
    }
    return {
      ...toRefs(state)
    }
  }
}
</script>
<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.0.0/styles/xcode.min.css');
</style>
