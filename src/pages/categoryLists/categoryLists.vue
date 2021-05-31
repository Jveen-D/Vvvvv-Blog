<template>
  <div class="h-screen mx-8 pt-28">
    <div class="h-full overflow-y-auto pb-8">
      <div
          v-for="(item,index) in articleLists.content"
          :key="'articleLists'+ index"
          :class="[index != 0?'mt-4':'','w-full bg-white opacity-70 p-4 rounded-lg']">
        <div class="text-black font-bold">
          {{ item.title }}
        </div>
        <div class="mt-4 tracking-wide leading-8">{{ item.summary }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {ListsPostsByCategorySlug,GetPostsById} from './categoryLists'
import { watch, computed, ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'categoryLists',
  setup () {
    const Router = useRouter()
    const slug = computed(() => Router.currentRoute.value.params.slug)
    let articleLists = ref({})

    let test = ref({})
    GetPostsById().then((res)=>{
      console.log(res)
    })
    watch(slug, ( currentV, preV ) => {
      ListsPostsByCategorySlug(currentV).then((res)=>{
        articleLists.value = res
      })
    },{
      immediate:true
    })
    return {
      slug,
      articleLists
    }
  }
}
</script>

<style scoped>

</style>