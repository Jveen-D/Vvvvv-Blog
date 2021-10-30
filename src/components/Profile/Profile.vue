<template>
  <!--  移动端头像-->
  <div
      class="
      lg:hidden
      flex
      justify-center
      items-center
      animate-pulse
      rounded-md
      fixed
      top-2
      right-4
      w-8
      h-8
    "
      @click="showProfileWrap"
  >
    <img :src="state.profile.user.avatar" alt="avatar" class="rounded-full"/>
  </div>
  <!--  移动端蒙层-->
  <div
      :class="[
      showProfile ? 'showShadowProfile w-screen bg-red-500 bg-opacity-5 lg:w-0' : '',
      showProfile === false ? 'hiddenShadowProfile w-screen bg-red-500 bg-opacity-5' : '',
      'fixed h-screen lg:bg-transparent z-10',
    ]"
      @click.self="showShadowProfileWrap"
  >
  </div>
  <!--  内容-->
  <div
      :class="[
      showProfile ? 'showProfile' : 'w-0',
      showProfile === false ? 'hiddenProfile' : '',
      'fixed right-0 lg:static lg:inset-0 lg:block lg:mt-8 w-0 xl:w-auto ' +
        'overflow-hidden font-mersan flex justify-between flex-col whitespace-nowrap rounded-xl z-20 lg:z-0',
    ]"
  >
    <!--    protile-->
    <div
        :class="[
        mode === 'light' ? 'lightMode' : 'bg-darkMode',
        'rounded-xl overflow-hidden duration-500 ease-in-out',
      ]"
    >
      <div :class="[mode === 'light' ? 'divide-gray-200' : 'divide-black', 'font-bold divide-y']">
        <div class="flex justify-between py-2 ml-4">
          <div>Profile</div>
          <div class="lg:hidden mt-2 mr-4" @click="showProfileWrap">
            <svg aria-hidden="true" class="icon animate-bounce">
              <use xlink:href="#icon-cha"/>
            </svg>
          </div>
        </div>
        <div></div>
      </div>
      <div class="flex justify-center items-end w-full h-24">
        <img :src="state.profile.user.avatar" alt="avatar" class="w-20 h-20 rounded-full"/>
      </div>
      <div
          :class="[
          mode === 'light' ? 'text-black' : '',
          'flex justify-center items-center duration-500 ease-in-out pt-4 font-bold text-sm',
        ]"
      >
        {{ state.profile.user.nickname }}
      </div>
      <div class="flex justify-center items-center pt-2 text-xs">
        <svg aria-hidden="true" class="icon animate-ping">
          <use xlink:href="#icon-12"/>
        </svg>
        <p>南京</p>
      </div>
      <div class="flex justify-center items-center pt-2 text-xs">
        {{ state.profile.user.email }}
      </div>
      <div class="rounded-xl flex pt-4 pb-4 justify-center items-center">
        <div class="flex justify-between w-3/6">
          <div class="relative wx" content="dwj18066042960">
            <svg aria-hidden="true" class="icon">
              <use xlink:href="#icon-weixin"/>
            </svg>
          </div>
          <a href="https://github.com/Jveen-D" target="_blank" title="github">
            <svg aria-hidden="true" class="icon">
              <use xlink:href="#icon-github"/>
            </svg>
          </a>
          <a
              href="https://wpa.qq.com/msgrd?v=3&uin=85066965&site=qq&menu=yes"
              target="_blank"
              title="和俺聊天"
          >
            <svg aria-hidden="true" class="icon">
              <use xlink:href="#icon-QQ"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <!--    细节-->
    <div
        :class="[
        mode === 'light' ? 'lightMode' : 'bg-darkMode',
        'mt-2 rounded-xl w-full pb-2 duration-500 ease-in-out',
      ]"
        style="width: 300px"
    >
      <div class="text-xs font-bold px-4 pt-2">博客技术细节:</div>
      <div v-for="(item,index) in des" class="flex pl-2 pt-2" :key="index">
        <svg aria-hidden="true" class="icon">
          <use xlink:href="#icon-biaoqian"/>
        </svg>
        <div class="text-sm">:{{ item.title }}</div>
      </div>
    </div>
    <!--    other-->
    <div
        :class="[
        mode === 'light' ? 'lightMode' : 'bg-darkMode',
        'flex flex-col justify-between rounded-xl w-full  mt-2 text-sm duration-500 ease-in-out',
      ]"
    >
      <div>
        <div class="text-xs font-bold px-4 py-2">Other:</div>
        <div class="flex items-center pl-2">
          <svg aria-hidden="true" class="icon">
            <use xlink:href="#icon-shijian"/>
          </svg>
          <div class="text-sm">博客已运行:</div>
        </div>
        <div class="flex justify-end pr-2">{{ time }}</div>
        <div class="flex items-center pl-2">
          <svg aria-hidden="true" class="icon">
            <use xlink:href="#icon-renshu"/>
          </svg>
          <div class="text-sm">累计访问:</div>
        </div>
        <div class="flex justify-end pr-2">{{ state.profile.visitCount }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {contentApi} from "/@/api/content";
import {getDuration} from '/@/utils/date';
import {computed, ComputedRef, reactive, toRefs, watch} from 'vue';
import {useStore} from 'vuex';
import {preventScrollY} from '/@/utils/utils';

interface State {
  showProfile: boolean | '',
  profile: {
    user:{
      avatar:string,
      nickname:string,
      email:string,
      createTime:number
    },
    visitCount:string
  },
  time: string,
  mode: ComputedRef<string>
  des: {title:string}[]
}

const store = useStore();
const state = reactive<State>({
  showProfile: '',
  profile: {
    user:{
      avatar:'',
      nickname:'',
      email:'',
      createTime:0
    },
    visitCount:'0'
  }, // profile 博主信息
  time: '', // 运行时间
  mode: computed(() => store.state.mode), //模式,
  des: [
    {title: '使用Vue3 Components API'},
    {title: '使用Vue3 setup语法糖'},
    {title: '使用Typescript'},
    {title: '博客自动化部署与发布'},
    {title: '使用Docker创建Jenkins持续集成'},
    {title: '使用Docker创建Nginx发布项目'},
    {title: '博客内容代码支持高亮显示'},
    {title: '使用Tailwind Css响应式布局'},
  ]
});
const {showProfile, time, mode, des} = {...toRefs(state)};

watch(showProfile, (newVal) => {
  preventScrollY(newVal);
});
contentApi('getBlogStatistics').then((res) => {
  state.profile = res.data;
  
  setInterval(() => {
    state.time = getDuration(state.profile.user.createTime);
  }, 1000);
});
//  移动端个人信息
const showProfileWrap = () => (state.showProfile = !state.showProfile);
// 移动端个人信息容器蒙层
const showShadowProfileWrap = () => (state.showProfile = !state.showProfile);
</script>

<style lang="scss" scoped>
@import './Profile.scss';
</style>
