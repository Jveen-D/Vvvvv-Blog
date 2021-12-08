<!--
 * @Date: 2021-07-19 18:56:16
 * @LastEditors: dwj18066042960
 * @LastEditTime: 2021-12-08 15:34:17
 * @FilePath: \Vvvvv-Blog\src\pages\notFound\index.vue
-->
<template>
  <div class="w-full h-full p-8 bg-gray-600">
    <div class="w-full h-full ytrlt" ref="myCharts"> </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive, nextTick } from 'vue';
  import * as echarts from 'echarts';
  // import mapbg from '/@/assets/images/home/mapBg.png';
  import geoJson from '/@/assets/map_s/json/all-world.json';
  // 地图中文名称映射
  import nameMap from '/@/assets/map_s/json/nameMap.json';

  // 注册地图
  const worldMapJson = JSON.parse(JSON.stringify(geoJson));
  echarts.registerMap('world', worldMapJson);
  interface State {
    mapChart: any;
    mapData: any;
    tootipTimer: any;
    count: number;
    visualMapMax: number;
  }
  const state = reactive<State>({
    mapChart: null,
    mapData: [], // 地图数据
    tootipTimer: null,
    count: 0,
    visualMapMax: 0,
  });
  // 地图容器ref
  const myCharts = ref<any>();
  const option = {
    //--------------   提示框 -----------------
    tooltip: {
      show: true,
    },
    series: [
      {
        type: 'map',
        // geoIndex: 0,
        map: 'world',
        // data根据value值切换不同颜色
        data: [],
        // 自定义地区名称
        // nameMap: nameMap,
        // center: [115.97, 29.71],
        // zoom: 1.5,
        //--------------   标签 -----------------
        label: {
          show: true, // 国际地图国家名称太密集了  最好别展示
          color: '#fff',
          formatter: (params) => {
            return params.name;
          },
        },
        //--------------   提示框 -----------------
        tooltip: {
          show: true,
          trigger: 'item',
          backgroundColor: 'rgb(54, 122, 224)',
          borderColor: 'rgb(54, 122, 224)',
          enterable: false,
          alwaysShowContent: true,
          formatter: (params) => {
            if (params.value) return `${params.name}：${params.value}`;
            else return '';
          },
          textStyle: {
            color: '#69c5ff',
          },
        },
        //--------------  图形样式 底图 -----------------
        itemStyle: {
          show: false,
          focus: 'self',
          // 区域的颜色
          areaColor: {
            // image: bgImg, // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
            repeat: 'repeat', // 是否平铺，可以是 'repeat-x', 'repeat-y', 'no-repeat'
          },
          borderColor: '#01B3FD',
          borderWidth: 2,
          opacity: 1,
          zlevel: 5,
          // 底部的颜色
          shadowColor: 'rgba(81,159,232,0.2)',
          // 设置shadow会导致偏移量失效
          // shadowBlur: 100,
          // 底部的偏移量
          shadowOffsetX: '4',
          shadowOffsetY: '4',
        },
        //--------------  高亮状态下的多边形和标签样式 -----------------
        emphasis: {
          label: {
            color: '#69c5ff',
          },
          itemStyle: {
            areaColor: 'rgb(54, 122, 224)',
          },
        },
      },
    ],
  };
  nextTick(() => {
    state.mapChart = echarts.init(myCharts.value);
    state.mapChart.setOption(option);
  });
</script>

<style lang="scss" scoped></style>
