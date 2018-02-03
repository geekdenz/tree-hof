// {}[Symbol.iterator]

const myObj = {
  value: 'A',
  children: [
    {
      value: 'B'
    },
    {
      value: 'C',
      children: [
        {
          value: 'E'
        }
      ]
    },
    {
      value: 'D'
    }
  ]
}

const getValue = (obj) => obj.value ? obj.value : null
const getChildren = (obj) => obj.children ? obj.children : []

function depthFirstIterator(obj, valueOfInterestFunction, childrenPropertyGetter) {
  let arr = []
  function *traverse(tree) {
    let children = tree !== undefined && childrenPropertyGetter(tree)
    let value = tree !== undefined && valueOfInterestFunction(tree)
    // console.log(tree)
    if (value) {
      //console.log(value)
      //arr.push(value)
      return value
    }
    if (children) {
      for (let child of children) {
        // arr.push(valueOfInterestFunction(child))
        yield traverse(child)
      }
    }
  }
  traverse(obj)
  //console.log(arr)
  return arr//traverse(obj)
  // console.log('arr=', arr)
  // return arr
}
let obj = {
  a: 1,
  b: 3,
  c: 6
}
for (let a of depthFirstIterator(myObj, getValue, getChildren)) {
  console.log(a)
}

function isEmpty(queue) {
  return !queue.length
}

export function breadthFirst(tree,
    getValue = (obj) => obj.value,
    getChildren = (obj) => obj.children) {
  const queue = [tree]
  const result = []
  let traverse
  while (!isEmpty(queue)) {
    traverse = queue.shift()
    result.push(getValue(traverse))
    const children = getChildren(traverse) || []
    children.map(child => queue.push(child))
  }
  return result
}
export function depthFirst(tree: {},
    getValue: (n) => any = obj => obj.value,
    getChildren: (n) => [] = obj => obj.children) {
  let result = []
  function depth(tree) {
    let val = getValue(tree) || null
    val !== null && result.push(val)
    const children = getChildren(tree) || []
    children.map(child => depth(child))
  }
  depth(tree)
  return result
}
export function depthFirstPost(tree,
    getValue: (n) => any = (obj) => obj.value,
    getChildren: (n) => [] = (obj) => obj.children) {
  let result = []
  function depthPost(tree) {
    const children = getChildren(tree) || []
    children.map(child => depthPost(child))
    let val = getValue(tree) || null
    val !== null && result.push(val)
  }
  depthPost(tree)
  return result
}
export function depthFirstIn(tree,
    getValue: (n) => any = (obj) => obj.value,
    getChildren: (n) => [] = (obj) => obj.children) {
  let result = []
  function depthIn(tree) {
    let children = getChildren(tree) || []
    let half = Math.ceil(children.length / 2)
    let left = children.slice(0, half)
    let right = children.slice(half)
    //console.log('half',half,left.value,right.value)
    left.map(child => depthIn(child))
    let val = getValue(tree) || null
    val !== null && result.push(val)
    right.map(child => depthIn(child))
  }
  depthIn(tree)
  return result
}
//module.exports.depthFirstIterator = depthFirstIterator
/*
module.exports.breadthFirst = breadthFirst
module.exports.depthFirst = depthFirst
module.exports.depthFirstIn = depthFirstIn
module.exports.depthFirstPost = depthFirstPost
*/
