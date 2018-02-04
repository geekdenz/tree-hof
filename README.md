# tree-hof
JS/TS Tree Higher Order Functions

# NOTE

PLEASE NOTE! I've only started this project yesterday (2018-02-03) and I believe no version before 1.2.0 is working properly.

This has been tested with binary trees only but should work with
any number of children. The example is in TypeScript only at the
moment. However, it should also work with vanilla JS.

## Why?

 * Wanted to create an easy to use, generic tree traversal library.
 * Felt the existing ones were not complete.
 * Need easy tree traversal in many projects.
 * Wanted to prove to myself that I can implement these recursive algorithms.

## What?

 * Simple tree to array transformers.
 * Breadth first traversal.
 * All depth first traversals (pre-/in-/post- order).
 * User-defined ```getValue()``` and ```getChildren()``` functions!
 * Iterators (not yet). I am unsure if this will happen.

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
