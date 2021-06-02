<template>
  <div class="h-screen mx-8 pt-28">
    <div class="h-full overflow-y-scroll pb-8">
      <div
          v-for="(item,index) in articleLists.content"
          :key="'articleLists'+ index"
          :class="[index != 0?'mt-4':'','w-full bg-white p-4 rounded-lg']"
          @click="goDetails(item.id)">
        <div class="text-black font-bold">
          {{ item.title }}
        </div>
        <div class="mt-4 tracking-wide leading-8">{{ item.summary }}</div>
        <div class="flex bg-white flex-wrap">
          <div v-for="(tag,tagIndex) in item.tags"
              :key="'tagIndex' + tagIndex"
              class="flex flex-nowrap items-center bg-blue-700 rounded-l-lg text-white text-xs pl-2 pr-2 mr-2 mt-2"
              @click.stop="changeSlug(tag.slug)">
            <div class="w-1 h-1 bg-white rounded-full mr-2"></div>
            <div>{{ tag.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ListsPostsByCategorySlug, ListsPostsByTagSlug } from './categoryLists'
import { watch, computed, ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'categoryLists',
  setup () {
    const Router = useRouter()
    const slug = computed(() => Router.currentRoute.value.params.slug)
    let articleLists = ref({})
    let tagSlug = ref('')

    watch(slug, ( currentV, preV ) => {
      if (currentV) {
        ListsPostsByCategorySlug(currentV).then(( res ) => {
          articleLists.value = res
        })
      }
    }, {
      immediate: true
    })
    watch(tagSlug, ( currentV, preV ) => {
      ListsPostsByTagSlug(currentV).then((res)=>{
        articleLists.value = res
      })
    })

    const changeSlug = (val) =>{
      tagSlug.value = val
    }
    const goDetails = ( id ) => {
      Router.push({
        path: `/detail/${ id }`
      })
    }
    return {
      slug,
      articleLists,
      goDetails,
      changeSlug
    }
  }
}
</script>

<style scoped>

</style>