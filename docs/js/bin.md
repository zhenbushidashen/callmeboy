---
id: bin
title: js中的二进制
sidebar_label: js中的二进制
---

## 前言

> javascript中所有数字都是是以64位浮点型进行存储的，遵循 `IEEE 754` 标准，也就是说，js底层没有整数类型，全部都是小数，当遇到整数运算时，javascript引擎会先将64位的浮点数转换为32位整数，然后再进行运算。小数运算时，也会出现精度不足的情况，比如经典的 **0.1 + 0.2 !== 0.3**。

如下
```javascript
1 === 1.0 // stdout -> true
0.1 + 0.2 // stdout -> 0.30000000000000004
```
## 原码、反码、补码

### 原码
在了解原码之前，需要知道两个概念，`机器数`和`真值`

> **机器数** 
> 一个数在计算机中的二进制表示形式,  叫做这个数的机器数。机器数是带符号的，在计算机用一个数的最高位存放符号正数为0, 负数为1。比如，十进制中的数 +3 ，计算机字长为8位，转换成二进制就是00000011。如果是 -3 ，就是 10000011 。那么，这里的 00000011 和 10000011 就是机器数。

> **真值** 
> 因为第一位是符号位，所以机器数的记录值就不等于真正的数值。例如上面的有符号数 10000011，其最高位1代表负，其真正数值是 -3 而不是记录值131（10000011转换成十进制等于131）。所以，为区别起见，将带符号位的机器数对应的真正数值称为机器数的真值。

例：0000 0001的真值 = +000 0001 = +1，1000 0001的真值 = –000 0001 = –1




## IEEE 754标准
| 符号位（0代表整数，1代表负数） | 指数位    | 小数位（有效位）
| ----------- | --------- | ----- |
|    第1位  | 第2～12位 | 第13～64位|
`IEEE 754`还规定了有效位第一个位永远是1， 并且不保存在规定的64位之中，所以有效数字永远是 1.xxxxxxxxxx