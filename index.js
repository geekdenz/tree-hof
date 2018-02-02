// {}[Symbol.iterator]

let myObj = {
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

let getValue = (obj) => obj.value
let getChildren = (obj) => obj.children

function depthFirstIterator(obj, valueOfInterestFunction, childrenPropertyGetter) {
  let arr = []
  function traverse(tree) {
    let children = tree !== undefined && childrenPropertyGetter(tree)
    let value = tree !== undefined && valueOfInterestFunction(tree)
    // console.log(tree)
    if (value) {
      //console.log(value)
      arr.push(value)
    }
    if (children) {
      for (let child of children) {
        // arr.push(valueOfInterestFunction(child))
        traverse(child)
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

module.exports.depthFirstIterator = depthFirstIterator
