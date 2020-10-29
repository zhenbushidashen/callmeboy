---
id: pick
title: Pick详解
tags: [typescript,类型, Pick]
---

:::tip
 `Pick` 的功能如其词意，就是挑选，筛选, 在声明一些衍生类时，我们需要从已有的类型中获取一些属性的类型来避免重复代码，这个时候，Pick就派上用场了

:::

### 用法

假如我们有以下类型，Animal类可能是一个很复杂的类型声明，而此时我们又想声明Human类型，将age和sex抽离出来

```typescript

interface Animal {
    age: number,
    sex: boolean,
    hasTail: boolean,
    liveArea: 'land'|'water'|'sky'
}

type Human = Pick<Animal, 'age'|'sex'>

```

 此时 Human等同如下代码

```typescript
 interface Human {
    age: number,
    sex: boolean,
 }
 ```

 ### 实现
 Pick 本身是Ts自带的语法糖，我们也可以很轻易的实现一个Pick类型, 如下

```typescript
type Pick<T, K extends keyof T> = { [P in K]: T[P]; }
```