<template>
  <div class="mx-4 md:mx-8 pt-12 md:pt-28 h-screen overflow-hidden font-mersan">
    <div class="md:-mr-4 h-full overflow-y-scroll pb-8">
      <div
          v-for="(item,index) in articleLists.content"
          :key="'articleLists'+ index"
          :class="[mode === 'light'?'bg-lightMode':'bg-darkMode',index !== 0?'mt-4':'','w-full bg-white p-4 rounded-lg']"
          @click="goDetails(item.id)">
        <div class="md:flex md:justify-between">
          <div :class="[mode === 'light'?'text-black':'',' font-bold transition-colors duration-500 ease-in-out  hover:text-FF9100']">{{ item.title }}</div>
          <div class="text-right mr-4 text-sm italic">发布于 {{ getUpdateTime(item.createTime) }}</div>
        </div>
        <div class="md:mt-4 tracking-wide break-all leading-6 ">{{ item.summary }}</div>
        <div class="flex items-center flex-wrap">
          <div v-for="(tag,tagIndex) in item.tags"
               :key="'tagIndex' + tagIndex"
               class="flex flex-nowrap items-center bg-blue-700  rounded-l-lg text-white text-xs pl-2 pr-2 mr-2 mt-2"
               @click.stop="changeSlug(tag.slug)">
            <div class="animate-ping w-1 h-1 bg-white rounded-full mr-2"></div>
            <span class="text-xs pt-0.5 ">{{ tag.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUpdateTime } from '/@/utils/date'
import { ListsPostsByCategorySlug, ListsPostsByTagSlug } from './categoryLists'
import { reactive, toRefs, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  name: 'categoryLists',
  setup () {
    const Router = useRouter()
    const store = useStore()
    const state = reactive({
      slug: computed(() => Router.currentRoute.value.params.slug),
      articleLists: '',
      tagSlug: '',
      mode: computed(()=>store.state.mode),
    })
    let { slug, tagSlug } = { ...toRefs(state) }

    watch(slug, ( currentV ) => {
      if (currentV) {
        ListsPostsByCategorySlug(currentV).then(( res ) => {
          state.articleLists = res
        })
      }
    }, {
      immediate: true
    })
    watch(tagSlug, ( currentV ) => {
      ListsPostsByTagSlug(currentV).then(( res ) => {
        state.articleLists = res
      })
    })
    const changeSlug = ( val ) => {
      tagSlug.value = val
    }
    const goDetails = ( id ) => {
      Router.push({
        path: `/detail/${ id }`
      })
    }
    return {
      ...toRefs(state),
      getUpdateTime,
      goDetails,
      changeSlug
    }
  }
}
</script>