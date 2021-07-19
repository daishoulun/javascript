/**
 * @name ES2021尝鲜
 */
/**
 * 逻辑赋值运算符
 */
{
  let x1 = 0, x2 = 2
  const a1 = x1 ||= x2
  const a2 = x1 || (x1 = x2)
  console.log(x1, x2, a1, a2) // 2 2 2 2

  x1 = 1
  const a3 = x1 ||= x2
  const a4 = x1 || (x1 = x2)
  console.log(x1, x2, a3, a4) // 1 2 1 1
  console.log('---------------------------')

  let y1 = 0, y2 = 2
  const b1 = y1 &&= y2
  const b2 = y1 && (y1 = y2)
  console.log(y1, y2, b1, b2) // 0 2 0 0

  y1 = 1
  const b3 = y1 &&= y2
  const b4 = y1 && (y1 = y2)
  console.log(y1, y2, b3, b4) // 2 2 2 2
  console.log('---------------------------')

  let z1 = true, z2 = false
  let c1 = z1 ??= z2
  let c2 = z1 ?? (z1 = z2)
  console.log(z1, z2, c1, c2) // true false true true
  z1 = false, z2 = true
  c1 = z1 ??= z2
  c2 = z1 ?? (z1 = z2)
  console.log(z1, z2, c1, c2) // false true false false
  // example
  const updateId = user => {
    // We can do this
    if (!user.id) user.id = 1
    // Or this
    user.id  = user.id || 1
    // Or use logical assignment operator.
    user.id ||= 1
  }

  function setOpts(opts) {
    opts.cat ??= 'meow'
    opts.dog ??= 'bow'
    console.log(opts)
  }
  setOpts({cat: 'bosi'}) // {cat: "bosi", dog: "bow"}
  setOpts({cat: 'meow'}) // {cat: "meow", dog: "bow"}
}
/**
 * 数字分隔符
 */
{
  let a = 123_00 // 12300
  let b = 12345_00 //1234500
  let c = 1_000_000_000 // 1000000000
  console.log(a, b, c)
}

/**
 * Promise.any 和 AggregateError
 */
{
  Promise.any([
    fetch('https://www.baidu.com/img/bd_logo1.png').then(() => 'home'),
    fetch('https://www.baidu.com/img/flexible/logo/pc/result.png').then(() => 'blog'),
    fetch('https://www.baidu.com/img/flexible/logo/pc/result@2.png').then(() => 'docs')
  ]).then(first => {
    // 所有请求状态都改变为 [fulfilled] 时, 进入then回调
    console.log(first)
  }).catch(error => {
    // 所有请求状态改变为 [rejected] 时, 进入catch回调
    console.log(error)
  })
}

/**
 * String.prototype.replaceAll
 */
{
  // String.prototype.replaceAll(searchValue, replaceValue)
  console.log('x'.replace('', '-')) // -x
  console.log('xxx'.replace(/(?:)/g, '-')) // -x-x-x-
  console.log('xxx'.replaceAll('', '-')) // -x-x-x-
}

/**
 * WeakRefs 和 FinalizationRegistry 对象
 */
{
  let target = {
    a: 1,
    b: 2
  }
  let wr = new WeakRef(target)
  console.log(wr)
  // FinalizationRegistry 对象可以让你在对象被垃圾回收时请求一个回调。
  const registry = new FinalizationRegistry(heldValue => {
    console.log(heldValue)
  })
  registry.register(target, 'some value', target)
  // registry.unregister(target);
  delete target.a
}
