<template>
  <div class="flex fixed w-full top-0">
    <div class="flex justify-center items-center shadow-2xl cursor-pointer bg-white w-60 h-20">
      <p class="font-bold text-black">Vvvvv-Blog</p>
    </div>
    <div class="flex flex-1 justify-between items-center h-20 pr-6 bg-white">
      <div class="flex pl-12">
        <span v-for="(item,index) in listCategories"
              :key="'listCategories'+index"
              :class="[activeCategory === index?'text-blue-700':'','cursor-pointer font-medium text-sm pr-4']"
              @click="goCategory(index)">
          {{ item.name }}
        </span>
      </div>
      <div class="flex justify-between items-center">
        <p class="mr-4 text-xs">{{ profile.nickname }}</p>
        <img class="flex justify-center items-center w-8 h-8 bg-purple-400 rounded-2xl"
             :src="profile.avatar"/>
      </div>
    </div>
  </div>
</template>

<script>
import { GetsBloggerProfile, ListCategories } from './Header'
import { ref } from "vue"
export default {
  name: 'Header',
  async setup () {
    // profile 博主信息
    const profile = await GetsBloggerProfile()
    // 文章分类
    const listCategories = await ListCategories()

    let activeCategory = ref(0)
    const goCategory = ( index ) => {
      activeCategory.value = index
    }

    return {
      profile,
      listCategories,
      goCategory,
      activeCategory
    }
  }
}
</script>

<style scoped>

</style>