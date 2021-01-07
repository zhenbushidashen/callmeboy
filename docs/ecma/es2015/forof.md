---
id: forof
title: for of 
sidebar_label: For..Of
---
:::tip
 思考 为什么已经有了for in / for循环 / forEach/map..., 还要有for of?
:::

### 1.遍历方法

 #### 索引遍历
```javascript
 const arr = [1,2,3,4,5]

 for (let i = 0, len = arr.length; i < len; i++) {
     console.log(i, arr[i]) 
 }
 // stdout -> 0,1  1,2  2,3  3,4  4,5

```
首先声明一个索引变量，然后通过 `数组[索引]`的方式访问元素

以上几行代码，相信各位同学已经使用的滚瓜烂熟了，

#### 高阶函数遍历
```javascript
 const arr = [1,2,3,4,5]
  
  arr.forEach((item,index) => {
       console.log(index, item) 
  })
 
 // stdout -> 0,1  1,2  2,3  3,4  4,5
  
  arr.map((item,index) => {
       console.log(index, item) 
  })
 
 // stdout -> 0,1  1,2  2,3  3,4  4,5

```
### 2.经典循环的局限性
索引遍历:
- 必须声明一个索引遍历
- 需要关注遍历对象的长度
- 只能用来遍历数组或者类数组，对于Objet类型，还需获取key进行辅助
  
高阶函数遍历:
- 由于数组操作全部在回调函数中进行，无发对循环进行break/continue，同时也无法return结束外层函数
- 回调函数频繁压栈出栈，数据量大时性能较低
- 不能同时遍历多个数组
- 同样不能遍历对象
  
### 3. for of 闪亮登场
 先看下for of 的用法

```javascript
  const arr = [1,2,3,4,5]
   for (const [index,number] of arr.entries()) {
       console.log(index,number)
   }
   // stdout -> 0,1  1,2  2,3  3,4  4,5

```
很明显，forof 去掉了经典for循环中的索引， 像forEach 一样进行局部声明，无需关心数组的长度，无需关心索引的自增


在 for ... of 中是可以使用 break/continue/return的

```javascript
   const arr = [1,2,3,4,5]
   for (const [index,number] of arr.entries()) {
       if (number > 3) { break }
       console.log(index,number)
   }

    // stdout -> 0,1  1,2  2,3 
