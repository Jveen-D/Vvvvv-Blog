<template>
  <div class="w-64 h-screen bg-white font-bold pt-20">
    <div class="flex flex-col h-full w-full overflow-y-auto cursor-pointer">
      <p class="pl-4 py-4 text-black"> All Slugs</p>
      <p v-for="(item,index) in listsTags"
         :class="[selectSlug === index?'bg-blue-700 text-white':'','py-4 pl-8']"
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
import { ref } from "vue"

export default {
  name: 'Slug',
  async setup () {
    // slug
    let listsTags = await ListsTags()
    let selectSlug = ref(0)
    const goSlug = ( index ) => {
      selectSlug.value = index
    }
    return {
      listsTags,
      selectSlug,
      goSlug
    }
  }
}
</script>

<style scoped>

</style>