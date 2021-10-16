// const _ = require('lodash')

// const items=[1,[2,[3,[4]]]]
// const new_items=_.flattenDeep(items)
// console.log('hell ye')

const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  new Promise((resolve, reject) =>
    resolve('should be right after baz, before bar')
  ).then(resolve => console.log(resolve))
  baz()
}

foo()