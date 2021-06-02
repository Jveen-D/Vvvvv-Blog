<template>
  <div class="h-screen mx-8 pt-28">
    <div class="h-full overflow-y-scroll pb-8">
      <div
          v-for="(item,index) in articleLists.content"
          :key="'articleLists'+ index"
          :class="[index != 0?'mt-4':'','w-full bg-white opacity-70 p-4 rounded-lg']"
          @click="goDetails(item.id)">
        <div class="text-black font-bold">
          {{ item.title }}
        </div>
        <div class="mt-4 tracking-wide leading-8">{{ item.summary }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {ListsPostsByCategorySlug} from './categoryLists'
import { watch, computed, ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'categoryLists',
  setup () {
    const Router = useRouter()
    const slug = computed(() => Router.currentRoute.value.params.slug)
    let articleLists = ref({})

    watch(slug, ( currentV, preV ) => {
      if(currentV){
        ListsPostsByCategorySlug(currentV).then((res)=>{
          articleLists.value = res
        })
      }
    },{
      immediate:true
    })

    const goDetails = (id) =>{
      Router.push({
        path:`/detail/${id}`
      })
    }
    return {
      slug,
      articleLists,
      goDetails
    }
  }
}
</script>

<style scoped>

</style>