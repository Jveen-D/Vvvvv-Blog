<template>
  <div class="h-screen mx-4 pt-28">
    <div class="h-full overflow-y-auto pb-8 bg-white p-4 rounded-lg">
      <div class="flex flex-col max-w-3xl">
        <div ref="markdownBody" class="markdown-body"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { GetPostsById } from './postDetail'
import { useRouter } from 'vue-router'
import { watch, computed, ref } from 'vue'
import './postDetail.scss'
import '/src/utils/highlight/styles/xcode.css'
import hljs from 'highlight.js'

export default {
  name: 'postDetail',
  setup () {
    const Router = useRouter()
    const id = computed(() => Router.currentRoute.value.params.id)

    const markdownBody = ref(null)

    watch(id, ( currentV, preV ) => {
      GetPostsById(currentV).then(( res ) => {
        markdownBody.value.innerHTML = res
        let pre = Array.from(document.getElementsByTagName('pre'))
        console.log(pre)
        pre.forEach((item,index)=>{
          item.insertAdjacentHTML('beforebegin','<figcaption class="line-numbers-head">' +
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
    }, {
      immediate: true
    })
    return {
      markdownBody
    }
  }
}
</script>

<style scoped lang="scss">
</style>