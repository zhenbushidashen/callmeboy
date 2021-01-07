---
id: compilation-principle
title: Typescript是如何编译的
tags: [typescript,类型, 编译原理]
---
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

:::tip 
  在计算机语言科学中，编译原理可谓是无处不在，了解一个语言的编译系统，可以帮助我们写出更好的代码，接下来就让我们看看Typescript的是如何进行编译的
:::

> 先贴上Typescript的源码地址 [查看Typescript源码](https://github.com/microsoft/TypeScript)

### 1.1 编译器
 Typescript 编译器的源代码在`src/complier`下, 我们来查看几个关键部分

 - Scanner 扫描器 (scanner.ts)
 - Parser 解析器 (parser.ts)
 - Binder 绑定器 (binder.ts)
 - Checker 检查器 (checker.ts)
 - Emitter 发射器 (emitter.ts)

#### 1.1.1 语法和语义
 语法和语义是两个概念，语法正确并不代表语义也正确，例如以下代码
```typescript
let count: number = '实际上我不是数字类型';
```
  *语义：从自然语言角度来看是有意义的*

#### 1.1.2 处理流程
```flow
SourceCode -> Scanner(扫描器) -> token流 -> Parser(解析器) 

-> AST(Abstract Syntax Tree) -> Binder(绑定器) -> Symbol(符号)

```
Symbol(符号) 是Typescript语义系统的主要构造块，从流程中可以看出，符号是绑定器处理后的结果，使得AST中声明节点与相同实体的其他声明连接起来
符号和AST是检查器用来验证源代码的语义是否正确

```flow
 AST + 符号 -> Checker(检查器) -> 类型验证结果
```

最后，使用Emitter(发射器)来生成javascript代码
```flow
 AST + Checker（检查器)-> Emitter(发射器) -> 编译后的javascript代码
```


当然，编译器下还有很多其他重要的代码模块，让我们再看看其他工具代码的关键部分
#### 1.1.3 文件: 核心工具
`core.ts` 是Typescript使用的核心工具库，其中 `objectAllocator:ObjectAllocator` 是一个全局的单例变量，它提供了一下定义
- getNodeConstructor（节点-> 解析器）
- getSymbolConstructor(符号-> 绑定器)
- getTypeConstructor(类型-> 检查器)
- getSignatureConstructor(签名用于索引、调用、构造)

#### 1.1.4 文件：关键数据结构
`type.ts`涵盖了整个编译器使用的关键数据结构和结构，以下是一些关键部分
- SyntaxKindAST: 这是一个枚举类型，节点类型全部通过此枚举进行识别
- TypeChecker: 类型检查器提供的接口
- CompilerHost: 主要是用于程序(Program)和系统(System)间的交互
- Node AST节点

#### 1.1.5 系统(System)
`system.ts`就是系统文件，Typescript 编译器与操作系统的所有交互都要通过System提供的接口进行，接口和接口的实现（WScript和Node） 全部在`system.ts`中定义,我们可以将其看成操作环境(Operating Enviroment),简称为 <Highlight color="#3480ff">OE</Highlight> 

#### 1.1.6 程序的概念
上面我们提到了Program(程序)，程序定义在`program.ts`中，编译上下文在Typescript编译器中被看作为一个Program, 包含我们需要编译的源代码和编译选项(tsconfig.json和命令行中的参数)

CompilerHost是与OE进行交互的机制
```flow
Program使用 -> CompilerHost使用 -> System
```

`CompilerHost`

之所以使用CompilerHost作为中间层，是为了让接口对Program进行细粒度的调整，并且无需考虑操作环境，比如，Program不需要关心System中的fileExists函数

`SourceFile`

Program提供了一个用于获取SourceFile的API：getSourceFiles():SourceFile[], 返回的数组中,每个元素都是一个AST的根节点

#### 1.1.7 AST(抽象语法树)
`Node`

Node(节点)是构建AST的基本单位
从语法上看，Node一般指待非叶子节点(non-terminal)，但是有些标识符和文字也会保留到AST中

Node由两个关键构成部分，一个是上文提到的SyntaxKind枚举，用来标记节点具体类型，另一个是接口，在实例化AST时，节点提供的API

下面是Node接口的一些关键属性
- TextRange: 记录当前节点在源文件中的起始位置
- parent?: Node 记录父节点
  



