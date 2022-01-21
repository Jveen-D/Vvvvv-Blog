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
                @click="changeComponent(item.title, item.id)"
            >{{ item.title }}</div>
        </div>
        <!-- 失活的组件将会被缓存！-->
        <!-- <keep-alive> -->
        <component
            class="flex-1 flex-shrink-0 pt-2"
            :is="state.activeComponent"
            :id="state.id"
            @update:id="showID"
        ></component>
        <!-- </keep-alive> -->
    </div>
</template>
<script lang="ts">
// 因为使用了动态组件，所以这里需要额外注册一下组件，如果直接在setup语法糖内导入组件那么传递给:is的变量没有作用
import { defineComponent } from 'vue'
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
import usePointer from './components/Sensors/usePointer.vue';
import usePointerSwipe from './components/Sensors/usePointerSwipe.vue';
import useScroll from './components/Sensors/useScroll.vue';
import useScrollLock from './components/Sensors/useScrollLock.vue';
import useSwipe from './components/Sensors/useSwipe.vue';
import useTextSelection from './components/Sensors/useTextSelection.vue';
import useUserMedia from './components/Sensors/useUserMedia.vue';
import useInterval from './components/Animation/useInterval.vue';
import useIntervalFn from './components/Animation/useIntervalFn.vue';
import useNow from './components/Animation/useNow.vue';
import useRafFn from './components/Animation/useRafFn.vue';
import useTimeout from './components/Animation/useTimeout.vue';
import useTimeoutFn from './components/Animation/useTimeoutFn.vue';
import useTimestamp from './components/Animation/useTimestamp.vue';
import useTransition from './components/Animation/useTransition.vue';
import createGlobalState from './components/State/createGlobalState.vue';
import createSharedComposable from './components/State/createSharedComposable/createSharedComposable.vue';
import useAsyncState from './components/State/useAsyncState.vue';
import useDebouncedRefHistory from './components/State/useDebouncedRefHistory.vue';
import useStorage from './components/State/useStorage.vue';
import useManualRefHistory from './components/State/useManualRefHistory.vue';
import useRefHistory from './components/State/useRefHistory.vue';
import useThrottledRefHistory from './components/State/useThrottledRefHistory.vue';
import useActiveElement from './components/Elements/useActiveElement.vue';
import useDocumentVisibility from './components/Elements/useDocumentVisibility.vue';
import useDraggable from './components/Elements/useDraggable.vue';
import useElementBounding from './components/Elements/useElementBounding.vue';
import useElementSize from './components/Elements/useElementSize.vue';
import useElementVisibility from './components/Elements/useElementVisibility.vue';
import useIntersectionObserver from './components/Elements/useIntersectionObserver.vue';
import useMouseInElement from './components/Elements/useMouseInElement.vue';
import useMutationObserver from './components/Elements/useMutationObserver.vue';
import useResizeObserver from './components/Elements/useResizeObserver.vue';
import useWindowFocus from './components/Elements/useWindowFocus.vue';
import useWindowScroll from './components/Elements/useWindowScroll.vue';
import useWindowSize from './components/Elements/useWindowSize.vue';
import computedInject from './components/Component/computedInject/computedInject.vue';
import templateRef from './components/Component/templateRef.vue';
import tryOnBeforeUnmount from './components/Component/tryOnBeforeUnmount.vue';
import tryOnMounted from './components/Component/tryOnMounted.vue';
import tryOnScopeDispose from './components/Component/tryOnScopeDispose.vue';
import tryOnUnmounted from './components/Component/tryOnUnmounted.vue';
import unrefElement from './components/Component/unrefElement.vue';
import useMounted from './components/Component/useMounted.vue';
import useTemplateRefsList from './components/Component/useTemplateRefsList.vue';
import useVirtualList from './components/Component/useVirtualList.vue';
import useVModel from './components/Component/useVModel.vue';
import useVModels from './components/Component/useVModels.vue';
export default defineComponent({
    components: {
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
        useParallax,
        usePointer,
        usePointerSwipe,
        useScroll,
        useScrollLock,
        useSwipe,
        useTextSelection,
        useUserMedia,
        useInterval,
        useIntervalFn,
        useNow,
        useRafFn,
        useTimeout,
        useTimeoutFn,
        useTimestamp,
        useTransition,
        createGlobalState,
        createSharedComposable,
        useAsyncState,
        useStorage,
        useDebouncedRefHistory,
        useManualRefHistory,
        useRefHistory,
        useThrottledRefHistory,
        useActiveElement,
        useDocumentVisibility,
        useDraggable,
        useElementBounding,
        useElementSize,
        useElementVisibility,
        useIntersectionObserver,
        useMouseInElement,
        useMutationObserver,
        useResizeObserver,
        useWindowFocus,
        useWindowScroll,
        useWindowSize,
        computedInject,
        templateRef,
        tryOnBeforeUnmount,
        tryOnMounted,
        tryOnScopeDispose,
        tryOnUnmounted,
        unrefElement,
        useMounted,
        useTemplateRefsList,
        useVirtualList,
        useVModel,
        useVModels
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
    state.categoryList = res.data.content.sort((a, b) => a.id - b.id);
    state.categoryList.forEach((item) => {
        if (item.slug.toLowerCase() === componentName.value.toLowerCase()) {
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
const changeComponent = (componentName, id) => {
    state.id = id
    state.activeComponent = componentName;
    Router.push({
        path: `/vueUse/${componentName}`,
    });
};

const showID = (id) => {
    console.log("🚀触发父组件方法",id)
}
</script>

<style lang="scss" scoped></style>
