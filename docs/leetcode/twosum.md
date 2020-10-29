---
id: twosum
title: 1.两数之和
tags: [算法, 数据结构, javascript,algorithms, Map]
---

:::tip

作为力扣的第一题，虽然打上 `easy` 的标签，但是对于没有算法经验的同学来说，还是有一定难度的。两数之和给我们带来的帮助是: 当我们在面对一些循环嵌套问题时，需要从复杂的计算过程中跳出来，利用空间换时间的思想来求解。

::: 
#### 题目
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

```
来源：力扣（LeetCode）


#### 题解:
```javascript
function twoSum(nums, target) {
  const cacheMap = new Map
  for (let i = 0,len = nums.length; i < len i++) {
    if (cacheMap.has(nums[i])) {
      return [ cacheMap.get(nums[i]), i ]
    }
    cacheMap.set(target - nums[i], i)
  }
  return []
}


```