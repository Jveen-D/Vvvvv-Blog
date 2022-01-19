<!--
 * @Date: 2022-01-10 13:37:12
 * @LastEditors: dwj18066042960
 * @FilePath: /Vvvvv-Blog/src/pages/vueUse/vueUse.vue
-->
<template>
    <div class="flex">
        <div
            class="flex-shrink-0 w-[200px] pt-10 lg:pt-0 text-gray-700 dark:text-gray-200 border-r border-[#3C3C43] dark:border-[#585458] border-opacity-[0.12] overflow-y-auto"
        >
            <div
                v-for="(item, index) in state.categoryList"
                :key="index"
                :class="[
                    state.activeComponent === item.title ? 'text-sky-500 dark:text-sky-400' : '',
                    'w-[200px] truncate pl-4 hover:text-sky-500 dark:hover:text-sky-400 transition-colors duration-500 font-bold',
                ]"
                @click="changeComponent(item.title,item.id)"
            >{{ item.title }}</div>
        </div>
        <!-- 失活的组件将会被缓存！-->
        <!-- <keep-alive> -->
        <component class="flex-1 flex-shrink-0 pt-2" :is="state.activeComponent" :id="state.id"></component>
        <!-- </keep-alive> -->
    </div>
</template>
<script lang="ts">
// 因为使用了动态组件，所以这里需要额外注册一下组件，如果直接在setup语法糖内导入组件那么传递给:is的变量没有作用
import { defineComponent } from 'vue';
import useActiveElement from './components/Browser/useActiveElement.vue';
import useBreakpoints from './components/Browser/useBreakpoints.vue';
import useBroadcastChannel from './components/Browser/useBroadcastChannel.vue';
import useBrowserLocation from './components/Browser/useBrowserLocation.vue';
import useClipboard from './components/Browser/useClipboard.vue';
import useColorMode from './components/Browser/useColorMode.vue';
import useCssVar from './components/Browser/useCssVar.vue';
import useDark from './components/Browser/useDark.vue';
import useEventListener from './components/Browser/useEventListener.vue';
import useEyeDropper from './components/Browser/useEyeDropper.vue';
import useFavicon from './components/Browser/useFavicon.vue';
import useFetch from './components/Browser/useFetch.vue';
import useFullscreen from './components/Browser/useFullscreen.vue';
import useMediaControls from './components/Browser/useMediaControls.vue';
import useMediaQuery from './components/Browser/useMediaQuery.vue';
import useMemory from './components/Browser/useMemory.vue';
import usePermission from './components/Browser/usePermission.vue';
import usePreferredColorScheme from './components/Browser/usePreferredColorScheme.vue';
import usePreferredDark from './components/Browser/usePreferredDark.vue';
import usePreferredLanguages from './components/Browser/usePreferredLanguages.vue';
import useScreenSafeArea from './components/Browser/useScreenSafeArea.vue';
import useScriptTag from './components/Browser/useScriptTag.vue';
import useShare from './components/Browser/useShare.vue';
import useTitle from './components/Browser/useTitle.vue';
import useUrlSearchParams from './components/Browser/useUrlSearchParams.vue';
import useVibrate from './components/Browser/useVibrate.vue';
import useWakeLock from './components/Browser/useWakeLock.vue';
import useWebNotification from './components/Browser/useWebNotification.vue';
import onClickOutside from './components/Sensors/onClickOutside.vue';
import onKeyStroke from './components/Sensors/onKeyStroke.vue';
import onStartTyping from './components/Sensors/onStartTyping.vue';
import useBattery from './components/Sensors/useBattery.vue';
import useDeviceMotion from './components/Sensors/useDeviceMotion.vue';
import useDeviceOrientation from './components/Sensors/useDeviceOrientation.vue';
import useDevicePixelRatio from './components/Sensors/useDevicePixelRatio.vue';
import useDevicesList from './components/Sensors/useDevicesList.vue';
import useDisplayMedia from './components/Sensors/useDisplayMedia.vue';
import useElementByPoint from './components/Sensors/useElementByPoint.vue';
import useElementHover from './components/Sensors/useElementHover.vue';
import useFocus from './components/Sensors/useFocus.vue';
import useFocusWithin from './components/Sensors/useFocusWithin.vue';
import useFps from './components/Sensors/useFps.vue';
import useGeolocation from './components/Sensors/useGeolocation.vue';
import useIdle from './components/Sensors/useIdle.vue';
import useKeyModifier from './components/Sensors/useKeyModifier.vue';
import useMagicKeys from './components/Sensors/useMagicKeys.vue';
import useMouse from './components/Sensors/useMouse.vue';
import useMousePressed from './components/Sensors/useMousePressed.vue';
import useNavigatorLanguage from './components/Sensors/useNavigatorLanguage.vue';
import useNetwork from './components/Sensors/useNetwork.vue';
import useOnline from './components/Sensors/useOnline.vue';
import usePageLeave from './components/Sensors/usePageLeave.vue';
import useParallax from './components/Sensors/useParallax.vue';
export default defineComponent({
    components: {
        useActiveElement,
        useBreakpoints,
        useBroadcastChannel,
        useBrowserLocation,
        useClipboard,
        useColorMode,
        useCssVar,
        useDark,
        useEventListener,
        useEyeDropper,
        useFavicon,
        useFetch,
        useFullscreen,
        useMediaControls,
        useMediaQuery,
        useMemory,
        usePermission,
        usePreferredColorScheme,
        usePreferredDark,
        usePreferredLanguages,
        useScreenSafeArea,
        useScriptTag,
        useShare,
        useTitle,
        useUrlSearchParams,
        useVibrate,
        useWakeLock,
        useWebNotification,
        onClickOutside,
        onKeyStroke,
        onStartTyping,
        useBattery,
        useDeviceMotion,
        useDeviceOrientation,
        useDevicePixelRatio,
        useDevicesList,
        useDisplayMedia,
        useElementByPoint,
        useElementHover,
        useFocus,
        useFocusWithin,
        useFps,
        useGeolocation,
        useIdle,
        useKeyModifier,
        useMagicKeys,
        useMouse,
        useMousePressed,
        useNavigatorLanguage,
        useNetwork,
        useOnline,
        usePageLeave,
        useParallax
    },
});
</script>
<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { contentApi } from '/@/api/content';
import { coreHooks } from '/@/hooks/core/coreHooks';
const { dispatchChangeSlug, getCurrentComponentName } = coreHooks();
dispatchChangeSlug('vueuse');
const componentName = getCurrentComponentName();
interface State {
    id: number; // 文章的id
    activeComponent: string;
    categoryList: Array<{ [propName: string]: any }>;
}
const state = reactive<State>({
    id: 0,
    activeComponent: componentName.value,
    categoryList: [],
});
/**
 * @description: 获取vueUse列表
 * @param {*}
 * @return {*}
 */
contentApi('listsPostsByCategorySlug', { sluy: 'vueuse' }).then((res) => {
    state.categoryList = res.data.content.sort((a,b)=>a.id - b.id);
    state.categoryList.forEach((item)=>{
        if(item.slug.toLowerCase() === componentName.value.toLowerCase()){
            state.id = item.id
        }
    })
});
const Router = useRouter();
/**
 * @description: 切换vueUse组件
 * @param {*}
 * @return {*}
 */
const changeComponent = (componentName,id) => {
    state.id = id
    state.activeComponent = componentName;
    Router.push({
        path: `/vueUse/${componentName}`,
    });
};
</script>

<style lang="scss" scoped></style>
