<template>
  <div class="w-64 h-screen font-bold pt-20">
    <div class="flex flex-col h-full w-full overflow-y-auto cursor-pointer bg-white bg-opacity-70">
      <p class="pl-4 py-4 text-black"> All Slugs</p>
      <p v-for="(item,index) in listsTags"
         :class="[selectSlug === index && active === true?'bg-blue-700 text-white':'','py-4 pl-8']"
         :key="'listsTags'+index"
         @click="goSlug(index)"
      >
        {{ item.name }}
      </p>
    </div>
  </div>
</template>

<script>
import { ListsTags } from './Slug'
import { computed, ref } from "vue"
import { useStore } from 'vuex'

export default {
  name: 'Slug',
  setup () {
    const store = useStore()

    // slug列表
    let listsTags = ref({})
    ListsTags().then((data)=>{
      listsTags.value = data
    })
    // 切换slug
    let selectSlug = ref(0)
    const goSlug = ( index ) => {
      selectSlug.value = index
      store.dispatch('SelectSlug')
    }
    return {
      listsTags,
      selectSlug,
      goSlug,
      active:computed(()=>store.getters.getSlug)
    }
  }
}
</script>

<style scoped>

</style>