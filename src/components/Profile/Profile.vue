<template>
  <!--  移动端头像-->
  <div
      class="lg:hidden flex justify-center items-center animate-pulse rounded-md absolute top-2 right-4 w-8 h-8"
      @click="showProfileWrap">
    <img :src="profile.user.avatar" alt="avatar" class="rounded-full"/>
  </div>
  <!--  移动端蒙层-->
  <div
      :class="[showProfile ? 'showShadowProfile w-screen bg-red-500 bg-opacity-5 lg:w-0' : '',
             showProfile === false ? 'hiddenShadowProfile w-screen bg-red-500 bg-opacity-5' : '',
             'fixed h-screen lg:bg-transparent z-10']"
      @click.self="showShadowProfileWrap">
  </div>
  <!--  内容-->
  <div
      :class="[
      showProfile ? 'showProfile' : 'w-0',
      showProfile === false ?'hiddenProfile' : '',
      'fixed right-0 lg:static lg:inset-0 lg:block lg:mt-8 lg:w-auto ' +
        'overflow-hidden font-mersan flex justify-between flex-col whitespace-nowrap rounded-xl z-20 lg:z-0']">
    <div
        :class="[mode === 'light'?'bg-lightMode':'bg-darkMode','rounded-xl overflow-hidden duration-500 ease-in-out']">
      <div :class="[mode === 'light'?'divide-gray-200':'divide-black','font-bold divide-y']">
        <div class="flex justify-between py-2 ml-4">
          <div>Profile</div>
          <div class="lg:hidden mt-2 mr-4" @click="showProfileWrap">
            <svg aria-hidden="true" class="icon animate-bounce">
              <use xlink:href="#icon-cha"></use>
            </svg>
          </div>
        </div>
        <div></div>
      </div>
      <div class="flex justify-center items-end  w-full h-24">
        <img :src="profile.user.avatar" alt="avatar" class="w-20 h-20 rounded-full"/>
      </div>
      <div
          :class="[mode === 'light'?'text-black':'','flex justify-center items-center duration-500 ease-in-out pt-4 font-bold text-sm']">
        {{ profile.user.nickname }}
      </div>
      <div class="flex justify-center items-center  pt-2 text-xs">
        <svg aria-hidden="true" class="icon animate-ping">
          <use xlink:href="#icon-12"></use>
        </svg>
        <p>南京</p>
      </div>
      <div class="flex justify-center items-center  pt-2 text-xs">
        {{ profile.user.email }}
      </div>
      <div class="rounded-xl flex pt-4 pb-4 justify-center items-center ">
        <div class="flex justify-between w-3/6">
          <div class="relative wx" content="dwj18066042960">
            <svg aria-hidden="true" class="icon">
              <use xlink:href="#icon-weixin"></use>
            </svg>
          </div>
          <a href="https://github.com/Jveen-D" target="_blank" title="github">
            <svg aria-hidden="true" class="icon">
              <use xlink:href="#icon-github"></use>
            </svg>
          </a>
          <a href="https://wpa.qq.com/msgrd?v=3&uin=85066965&site=qq&menu=yes" target="_blank" title="和俺聊天">
            <svg aria-hidden="true" class="icon">
              <use xlink:href="#icon-QQ"></use>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div
        :class="[mode === 'light'?'bg-lightMode':'bg-darkMode','mt-2 rounded-xl w-full pb-2 duration-500 ease-in-out']"
        style="width: 300px;">
      <div class="text-xs font-bold px-4 pt-2">博客技术细节:</div>
      <div class="flex pl-2 pt-2">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-biaoqian"></use>
        </svg>
        <div class="text-sm">:使用Vue3 Components API</div>
      </div>
      <div class="flex pl-2 pt-2">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-biaoqian"></use>
        </svg>
        <div class="text-sm">:使用Vue3 setup语法糖</div>
      </div>
      <div class="flex pl-2 pt-2">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-biaoqian"></use>
        </svg>
        <div class="text-sm">:博客自动化部署与发布</div>
      </div>
      <div class="flex pl-2 pt-2">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-biaoqian"></use>
        </svg>
        <div class="text-sm">:使用Docker创建Jenkins持续集成</div>
      </div>
      <div class="flex pl-2 pt-2">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-biaoqian"></use>
        </svg>
        <div class="text-sm">:使用Docker创建Nginx发布项目</div>
      </div>
      <div class="flex pl-2 pt-2">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-biaoqian"></use>
        </svg>
        <div class="text-sm">:博客内容代码支持高亮显示</div>
      </div>
      <div class="flex pl-2 pt-2">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-biaoqian"></use>
        </svg>
        <div class="text-sm">:使用Tailwind Css响应式布局</div>
      </div>
    </div>
    <div
        :class="[mode === 'light'?'bg-lightMode':'bg-darkMode','flex flex-col justify-between rounded-xl w-full  mt-2 text-sm duration-500 ease-in-out']">
      <div>
        <div class="text-xs font-bold px-4 py-2">Other:</div>
        <div class="flex items-center pl-2">
          <svg aria-hidden="true" class="icon">
            <use xlink:href="#icon-shijian"></use>
          </svg>
          <div class="text-sm">博客已运行:</div>
        </div>
        <div class="flex justify-end pr-2">{{ time }}</div>
        <div class="flex items-center pl-2">
          <svg aria-hidden="true" class="icon">
            <use xlink:href="#icon-renshu"></use>
          </svg>
          <div class="text-sm">累计访问:</div>
        </div>
        <div class="flex justify-end pr-2">{{ profile.visitCount }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { GetsBloggerProfile } from './Profile'
import { getDuration } from '@/utils/date'
import { computed, reactive, toRefs, watch } from 'vue'
import { useStore } from 'vuex'
import { preventScrollY } from '@/utils/utils'

const store = useStore()
const state = reactive({
  showProfile: '',
  profile: {}, // profile 博主信息
  time: '', // 运行时间
  mode: computed(() => store.state.mode)//模式
})
const { showProfile, profile, time, mode } = { ...toRefs(state) }

watch(showProfile, ( newVal ) => {
  preventScrollY(newVal)
})

state.profile = await GetsBloggerProfile()
setInterval(() => {
  state.time = getDuration(state.profile.user.createTime)
}, 1000)
//  移动端个人信息
const showProfileWrap = () => state.showProfile = !state.showProfile
// 移动端个人信息容器蒙层
const showShadowProfileWrap = () => state.showProfile = !state.showProfile

</script>

<style lang="scss" scoped>
@import "./Profile.scss";
</style>
