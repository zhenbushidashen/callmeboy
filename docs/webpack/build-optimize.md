---
id: build-optimize
title: 构建优化
sidebar_label: 构建优化
---

## 配置

### loader优化

`babel-loader`

在options中开启缓存，以下是babel-loader文档介绍，不必赘述

`cacheDirectory`: Default `false`. When set, the given directory will be used to cache the results of the loader. Future webpack builds will attempt to read from the cache to avoid needing to run the potentially expensive Babel recompilation process on each run. If the value is set to `true` in options (`{cacheDirectory: true}`), the loader will use the default cache directory in `node_modules/.cache/babel-loader` or fallback to the default OS temporary file directory if no `node_modules` folder could be found in any root directory.

