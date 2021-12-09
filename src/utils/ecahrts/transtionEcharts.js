/*
 * @Date: 2021-12-08 15:42:20
 * @LastEditors: dwj18066042960
 * @LastEditTime: 2021-12-09 16:54:14
 * @FilePath: \Vvvvv-Blog\src\utils\ecahrts\transtionEcharts.js
 */
function isArray(val) {
  return val && Array.isArray(val);
}

let reault = {
  type: 'FeatureCollection',
  crs: {
    type: 'name',
    properties: { name: 'urn:ogc:def:crs:OGC:1.3:CRS84' },
  },
  features: [],
};
const allWordJson = {
  type: 'FeatureCollection',
  crs: {
    type: 'name',
    properties: { name: 'urn:ogc:def:crs:OGC:1.3:CRS84' },
  },
  features: [
    {
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [47.97822265625001, 7.9970703125],
            [46.97822265625001, 7.9970703125],
            [43.98378906250002, 9.008837890624989],
            [43.482519531250006, 9.379492187499991],
          ],
        ],
      },
      properties: { name: 'Somalia', childNum: 1 },
    },
  ],
};
// coordinates 最多是个二维数组
allWordJson.features.forEach((item) => {
  /** deep
   * @description: 递归函数  如果元素为数组则继续递归，
   *                        关键就在于item[0]，如果不是数组则说明已经不能再往下递归了
   * @param {*}
   * @return {*}
   */
  const deep = (item) => {
    let result = [];
    item.forEach((val) => {
      if (isArray(val[0])) {
        deep(val[0]);
        return;
      } else {
        console.log(val[0] - 50)
        result[0] = val[0] - 50;
        result[1] = val[1];
      }
      console.log(result);
      return result;
    });
  };

  /** change
   * @description: 只遍历geometry.coordinates中的数据，其他的数据不经过任何处理
   * @param {item} item是一个对象{geometry:...,properties:...}，所以不能forEach
   * @return {result}
   */
  const change = (item) => {
    let result = {
      geometry: {
        type: 'Polygon',
        coordinates: [],
      },
    };
    result.properties = item.properties;
    item.geometry.coordinates.forEach((element) => {
      result.geometry.coordinates.push(deep(element));
    });
    return result;
  };
  // 传入的item是一个对象{geometry:...,properties:...}
  reault.features.push(change(item));
});
return;
const fs = require('fs');
fs.writeFile('./index.txt', JSON.parse(reault), (err) => {
  if (err) {
    console.log('写入失败');
  } else {
    console.log('写入成功');
  }
});
