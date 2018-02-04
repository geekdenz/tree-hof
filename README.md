# tree-hof
JS/TS Tree Higher Order Functions

[![Build Status](https://travis-ci.org/geekdenz/tree-hof.svg?branch=master)](https://travis-ci.org/geekdenz/tree-hof)

### [Test Report](https://github.com/geekdenz/tree-hof/blob/master/test-report.md)

## Why?

 * Adds big value to your project, because tree algorithms can be challenging to get right easily.
 * Wanted to create an easy to use, generic tree traversal library.
 * Felt the existing ones were not complete.
 * Need easy tree traversal in many projects.
 * Wanted to prove to myself that I can implement these recursive algorithms.

## What?

 * Simple tree to array transformers.
 * Breadth first traversal.
 * All depth first traversals (pre-/in-/post- order).
 * User-defined ```getValue()``` and ```getChildren()``` functions!
 * TypeScript and JavaScript compatible.
 * NO Iterators. Higher order functions make for loops obsolete. Just use ```Array.forEach``` if you have to and ```Array.map``` etc. otherwise.
 * Just over 6KB unminified! 2.8KB minified!

## How?

```typescript
import { breadthFirst, depthFirst } from 'tree-hof'
const tree = {
  value: 'A',
  children: [{
    value: 'B'
  }]
}

breadthFirst(tree).forEach((n) => console.log(n))

interface T {
  item: string;
  leftChild?: T;
  rightChild?: T;
}

const customTree: T = {
  item: 'A',
  leftChild: {
    item: 'B'
  },
  rightChild: {
    item: 'C'
  }
};

depthFirst(customTree, (n) => n.item,
  (n) => [n.leftChild,n.rightChild])
  .map((v) => console.log(v))
```



### NOTE

If you have tried this before and it didn't work, please try
again. It should now be working. It has no dependencies and I
believe adds a lot of value while being very small.

This has been tested with binary trees only but should work with
any number of children. There are unit tests.

The example above is in TypeScript only at the
moment. However, it should also work with vanilla JS or any library.
