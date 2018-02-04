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
};

/*
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
*/

function isEmpty<T extends any>(queue: T[]) {
  return !queue.length;
}

export function breadthFirst<T extends any, V extends any>(tree: T,
    getValue = (obj: T) => obj.value,
    getChildren = (obj: T) => obj.children): V[] {
  const queue = [tree];
  const result: V[] = [];
  let traverse;
  while (!isEmpty(queue)) {
    traverse = queue.shift();
    result.push(getValue(traverse));
    const children = getChildren(traverse) || [];
    children.map((child: any) => queue.push(child));
  }
  return result;
}

export function depthFirst<T extends any, V extends any>(tree: T,
    getValue: (n: T) => V = obj => obj.value,
    getChildren: (n: T) => T[] = obj => obj.children): V[] {
  let result: V[] = []
  function depth(tree: T) {
    let val = tree && getValue(tree) || null;
    val !== null && result.push(val);
    const children = tree && getChildren(tree) || [];
    children.map(child => depth(child));
  }
  depth(tree);
  return result;
}
export function depthFirstPost<T extends any, V extends any>(tree: T,
    getValue: (n: T) => V = (obj) => obj.value,
    getChildren: (n: T) => T[] = (obj) => obj.children): V[] {
  let result: V[] = [];
  function depthPost(tree: any) {
    const children = getChildren(tree) || [];
    children.map(child => depthPost(child));
    let val = getValue(tree) || null;
    val !== null && result.push(val);
  }
  depthPost(tree);
  return result;
}
export function depthFirstIn<T extends any, V extends any>(tree: T,
    getValue: (n: T) => V = (obj) => obj.value,
    getChildren: (n: T) => T[] = (obj) => obj.children): V[] {
  let result: V[] = []
  function depthIn(tree: T) {
    let children = getChildren(tree) || [];
    let half = Math.ceil(children.length / 2);
    let left = children.slice(0, half);
    let right = children.slice(half);
    //console.log('half',half,left.value,right.value)
    left.map(child => depthIn(child));
    let val = getValue(tree) || null;
    val !== null && result.push(val);
    right.map(child => depthIn(child));
  }
  depthIn(tree);
  return result;
}

/**
// The following does not add value and is cut:
export function depthFirstIterator<T extends any, V extends any>(tree: T,
    getValue: (n: T) => V = (obj) => obj.value,
    getChildren: (n: T) => T[] = (obj) => obj.children)  {
  let items: V[] = depthFirst(tree, getValue, getChildren);
  function * it() {
    for (let item of items) {
      yield item;
    }
  }
  return it();
}
*/
