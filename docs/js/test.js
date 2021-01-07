 
  function mockNew(constructorFn,...args) {
    let result = {}
      result.__proto__ = constructorFn.prototype
      const fnResult = constructorFn.apply(result,args)
      return typeof fnResult === 'object' ? fnResult : result
  }
function Animail(name) {
    this.name = name
}

let s = mockNew(Animail,'猪')
let b = new Animail('猫')

console.log(s)
console.log(b)