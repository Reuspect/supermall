import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}

export function getHomeGoods(type,page) {
  return request({
    url:'/home/data',
    params:{
      type,
      page,
    }
  })
}

// //函数调用-》压入函数栈 保存函数调用过程中的所有变量
// //函数调用结束
// function test() {
//   const names = ['why','aaa']
// }

// let totalNums = []
// const nums1 = [20,11,222]
// const nums2 = [111,22,333]
//
// // for (let n of nums1){
// //   totalNums.push(n)
// // }
//
// totalNums.push(...nums1) 可以将数组里的数据传入到