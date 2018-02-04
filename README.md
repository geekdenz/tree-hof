# tree-hof
JS/TS Tree Higher Order Functions

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
 * Iterators (not yet).

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

const customTree = {
  item: 'A',
  leftChild: {
    item: 'B'
  },
  rightChild: {
    item: 'C'
  }
}

depthFirst(customTree, (n) => n.item, (n) => [n.leftChild,n.rightChild]).map((v) => console.log(v))
```
