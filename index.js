const assert = require('node:assert')

const arr1 = ['0', '1', '2']
const arr2 = ['2', '0', '3']
const arr3 = arr1.concat(arr2)
assert.deepStrictEqual(arr3.sort(), ['0', '0', '1', '2', '2', '3'])

const set = new Set()
arr1.forEach((x) => set.add(x))
arr2.forEach((x) => set.add(x))
assert.deepStrictEqual(Array.from(set), ['0', '1', '2', '3'])

assert.deepStrictEqual(Array.from(new Set([...arr1, ...arr2])), ['0', '1', '2', '3'])

console.log('keys', set.keys())
console.log('values', set.values())

/**
 * In a common array, we use [].indexOf('1') !== -1 or [0].includes(0) to check
 * if an element exists.
 */
assert.ok(set.has('1'))

const users1 = new Set([
  'joao',
  'mariazinha',
  'xuxa da silva',
])
const users2 = new Set([
  'erick',
  'julio',
  'mariazinha',
])

const intersection = new Set([...users1].filter(user => users2.has(user)))
assert.deepStrictEqual(Array.from(intersection), ['mariazinha'])

const difference = new Set([...users1].filter(user => !users2.has(user)))
assert.deepStrictEqual(Array.from(difference), ['joao', 'xuxa da silva'])

// -- weakset
// same as set, but it does not have the .size property
// only works with keys as references
// it's not possible to iterate over it
// has only simple methods: add, delete, has

const user1 = { id: 1 }
const user2 = { id: 2 }
const weakSet = new WeakSet([user1])
weakSet.add(user2)
weakSet.delete(user1)
assert.ok(!weakSet.has(user1))