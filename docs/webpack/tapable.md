---
id: tapable
title: Tapable
sidebar_label: Tapable
---

:::tip

 `webpack` 本质上是一个插件系统，通过内置诸多插件和用户自定义的插件来实现强大的bundle系统,而整个插件系统是基于`tapable`构建的
:::

## 1. 概要
- [tapable](https://github.com/webpack/tapable)是一个独立的[npm](https://www.npmjs.com/)包

- tapable是开源的

- tapable本质是一套 **发布-订阅**  库

  

## 2. 方法

```javascript
import {
  /* 同步钩子 */
	SyncHook,
  /* 同步可提前中断钩子 */
	SyncBailHook,
  /*  同步瀑布流钩子 */
	SyncWaterfallHook,
  /*  同步循环钩子 */
	SyncLoopHook,
  /* 异步并发钩子 */
	AsyncParallelHook,
  /* 异步并发可中断钩子 */
	AsyncParallelBailHook,
  /*  异步顺序钩子 */
	AsyncSeriesHook,
  /* 异步可中断钩子 */
	AsyncSeriesBailHook,
  /*  异步瀑布流钩子 */
	AsyncSeriesWaterfallHook
 } from 'tapable'
```



## 3. 使用





