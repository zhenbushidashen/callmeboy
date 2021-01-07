---
id: new-mock
title: 实现new方法
sidebar_label: 实现new方法

---
:::tip

网上一些面试题中经常会提到模拟new的实现，其实根据定义，实现起来并不难

:::


## 1.定义
> new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。

## 2.语法
> new constructor[([arguments])]

## 3.关键点
- 1.创建一个空的简单JavaScript对象（即{})
- 2.链接该对象（设置该对象的constructor）到另一个对象
- 3.将步骤1新创建的对象作为this的上下文
- 4.如果该函数没有返回对象，则返回this

## 4.实现
基本用法和定义已经明确，实现起来就比较容易了，当然我们是模拟，所以采取函数的方式来实现

```javascript
function mockNew(constructorFn,...args) {
    let result = {}
    result.__proto__ = constructorFn.prototype
    const fnResult = constructorFn.apply(result,args)
    return typeof fnResult === 'object' ? fnResult : result
  }

/* 测试代码 */
function Animail(name) {
    this.name = name
}

let pig = mockNew(Animail,'小猪')
let dog = mockNew(Animail,'小狗')
console.log(pig)
console.log(dog)

// stdout -> Animail { name: '小猪' }
// stdout -> Animail { name: '小狗' }

```

- [规范参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)
  