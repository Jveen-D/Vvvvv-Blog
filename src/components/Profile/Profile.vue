<template>
  <div class="flex h-screen justify-between flex-col pt-28 w-auto rounded-l-xl">
    <div>
      <div class="bg-white rounded-tl-xl font-bold divide-y divide-gray-200">
        <div class="py-2 ml-4">Profile</div>
        <div></div>
      </div>
      <div class="flex justify-center items-end bg-white w-full h-24">
        <img :src="profile.user.avatar" alt="avatar" class="w-20 h-20 rounded-full"/>
      </div>
      <div class="flex justify-center items-center bg-white pt-4 font-bold text-black text-sm">
        {{ profile.user.nickname }}
      </div>
      <div class="flex justify-center items-center bg-white pt-2 text-xs">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-12"></use>
        </svg>
        <p>南京</p>
      </div>
      <div class="flex justify-center items-center bg-white pt-2 text-xs">
        {{ profile.user.email }}
      </div>
      <div class="rounded-bl-xl flex pt-4 pb-4 justify-center items-center bg-white">
        <div class="flex justify-between w-3/6">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-weixin"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-github"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-QQ"></use>
          </svg>
        </div>
      </div>
    </div>
    <div>
      <div class="rounded-l-xl w-full bg-white mt-2 pb-2">
        <div class="text-xs font-bold px-4 py-2">Description:</div>
        <div class="flex pl-2">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-biaoqian"></use>
          </svg>
          <div class="text-sm">:{{ profile.user.description }}</div>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-between h-full flex-1 bg-white rounded-tl-xl w-full  mt-2 text-sm">
      <div>
        <div class="text-xs font-bold px-4 py-2">Other:</div>
        <div class="flex items-center pl-2">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shijian"></use>
          </svg>
          <div class="text-sm">博客已运行:</div>
        </div>
        <div class="flex justify-end pr-2">{{ time }}</div>
        <div class="flex items-center pl-2">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shijian"></use>
          </svg>
          <div class="text-sm">更新时间:</div>
        </div>
        <div class="flex justify-end pr-2">{{ updateTime }}</div>
        <div class="flex items-center pl-2">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-renshu"></use>
          </svg>
          <div class="text-sm">累计访问:</div>
        </div>
        <div class="flex justify-end pr-2">{{ profile.visitCount }}</div>
      </div>
      <div class="mb-4">
        <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=300 height=100
                src="//music.163.com/outchain/player?type=0&id=4968696828&auto=1&height=90"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import { GetsBloggerProfile } from './Profile'
import {getDuration, getUpdateTime} from '/@/utils/date'
import { ref } from 'vue'

export default {
  name: 'Profile',
  async setup () {
    // profile 博主信息
    const profile = await GetsBloggerProfile()
    // 运行时间
    let time = ref('')
    setInterval(() => {
      time.value = getDuration(profile.user.createTime)
    }, 1000)
    // 更新时间
    let updateTime = getUpdateTime(profile.user.updateTime)
    return {
      profile,
      time,
      updateTime
    }
  }
}
</script>

<style scoped>

</style>