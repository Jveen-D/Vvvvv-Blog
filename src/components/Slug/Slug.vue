<template>
  <div class="w-64 h-screen font-bold pt-20">
    <div class="flex flex-col h-full w-full overflow-y-auto bg-white bg-opacity-70">
      <p class="pl-4 py-4 text-black"> All Slugs</p>
      <p v-for="(item,index) in listsTags"
         :class="[slug === item.slug?'bg-blue-700 text-white':'','py-4 pl-8']"
         :key="'listsTags'+index"
         @click="goSlug(index,item.slug)"
      >
        {{ item.name }}
      </p>
    </div>
  </div>
</template>

<script>
import { ListsTags } from './Slug'
import { computed, onMounted, ref } from "vue"
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'Slug',
  setup () {
    const Router = useRouter()
    const store = useStore()

    let slug = computed({
      get:()=>store.getters.getSlug,
      set:(val)=>store.dispatch('ChangeSlug',val)
    })

    // 目前所在slug分类
    let activeCategory = computed(() => Router.currentRoute.value.params.slug)
    // 提交mutation修改slug
    onMounted(()=>{
      slug.value = activeCategory
    })

    // 点击slug切换
    const goSlug = ( index,val ) => {
      slug = val
      Router.push({
        path: `/sluglist/${ val }`,
      })
    }

    // slug列表
    let listsTags = ref({})
    ListsTags().then((data)=>{
      listsTags.value = data
    })
    return {
      listsTags,
      goSlug,
      slug
    }
  }
}
</script>

<style scoped>

</style>