---
id: array-mock
title: 模拟js数组常用方法
sidebar_label: 模拟js数组常用方法

---
:::caution

以下方法均为模拟实现，仅供学习参考，切勿在生产环境下使用 😄

:::
 

### forEach
>  ```js 
arr.forEach(callback(currentValue [, index [, array]])[, thisArg])


```js
Array.prototype.forEach = function(cb,ctx) {
    const self = ctx || this;
    let i = 0;
    while (i < self.length) {
        cb(self[i], i, self);
        i++;
    }
};
```
[规范参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- - -

### map 
>  ``` js 
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array 
}[, thisArg])

```js
Array.prototype.map = function(cb, ctx) {
  const self = ctx || this;
  let i = 0;
  let result = Array(self.length);
  while (i < self.length) {
      result[i] = cb(self[i], i, self);
    i++;
  }
  return result;
};
```
[规范参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- - -
### fill
> ```js 
  arr.fill(value[, start[, end]])
 ```

```js


Array.prototype.fill = function(value, start = 0, end) {
  end = end || this.length;
  if (start < 0) {
    start = this.length + start;
  }
  if (start > end) {
    return this;
  }
  let i = start;
  while (i < end) {
    this[i] = value;

    i++;
  }
  return this;
};

```
[规范参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
- - -

### includes
> ```js 
  arr.includes(valueToFind[, fromIndex])
 ```

```js

Array.prototype.includes = function(valueToFind, fromIndex) {
  let i = typeof fromIndex === 'number' && !Number.isNaN(fromIndex) ? fromIndex : 0
  while (i < this.length) {
    if (this[i] === valueToFind) {
      return true;
    }
    i++;
  }
  return false;
};

```
[规范参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- - -

### join
> ```js 
arr.join([separator])

```js

Array.prototype.join = function(separator = ",") {
  let i = 0,
      result = "";
  while (i < this.length) {
    result += i > 0 && i < this.length - 1 ? this[i] + separator : this[i];
    i++;
  }
  return result;
};

```
[规范参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
- - -
### push
> ```js 
arr.push(element1, ..., elementN) 

```js
Array.prototype.push = function() {
  for (let i = 0,len = arguments.length; len,i++) {
      this[this.length] = arguments[i];
  }
  return this[this.length - 1]
};
```
[规范参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- - -
### pop
> ```js 
arr.pop()

```js
Array.prototype.pop = function(value) {
  let popValue = this[this.length - 1];
  this.length--;
  return popValue;
};

```
[规范参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
- - -
### shift
> ```js
 arr.shift()

```js
Array.prototype.shift = function() {
  let shiftValue = this[0];
  let i = 0;
  while (i < this.length - 1) {
    this[i] = this[++i];
  }
  this.length--;
  return shiftValue;
};

```
[规范参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
- - -
### find
> ```js 
arr.find(callback[, thisArg])
```js
Array.prototype.find = function(cb, ctx) {
  const self = ctx || this;
  let i = 0;
  while (i < self.length) {
    if (self[i] === value) {
      return i;
    }
    i++;
  }
  return -1;
};
```
[规范参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- - -

### findIndex
> ```js arr.findIndex(callback[, thisArg])
```js
Array.prototype.findIndex = function(value, ctx) {
  const self = ctx || this;
  let i = 0;
  while (i < self.length) {
    if (self[i] === value) {
      return i;
    }
    i++;
  }
  return -1;
};
```
[规范参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- - -

### some
> ```js 
arr.some(callback(element[, index[, array]])[, thisArg]) 

```js
Array.prototype.some = function(cb, ctx) {
  const self = ctx || this;
  let i = 0;
  while (i < self.length) {
    if (cb(self[i], i, self)) {
      return true;
    }
    i++;
  }

  return false;
};
```
[规范参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- - -

### reduce

> ```js 
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

```js
Array.prototype.reduce = function(cb, init) {
  const hasInitialValue = typeof init !== "undefined";
  if (!this.length) {
    if (hasInitialValue) {
      return init;
    }
    throw new TypeError("reduce of empty array with no initial value");
  }
  let reduced = hasInitialValue ? init : this[0],
    i = hasInitialValue ? 0 : 1;
    while (i < this.length) {
      reduced = cb(reduced, this[i], i, this);
      i++;
    }
    return reduced;
};
```
[规范参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
