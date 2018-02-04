# TOC
   - [Tree](#tree)
     - [Depth first search](#tree-depth-first-search)
     - [Depth first on betterTree](#tree-depth-first-on-bettertree)
     - [Depth first (post order) search](#tree-depth-first-post-order-search)
     - [Depth first (post order) on betterTree](#tree-depth-first-post-order-on-bettertree)
     - [Depth first (in order) on betterTree](#tree-depth-first-in-order-on-bettertree)
     - [Breadth first search](#tree-breadth-first-search)
     - [NO Depth first iterator](#tree-no-depth-first-iterator)
<a name=""></a>
 
<a name="tree"></a>
# Tree
<a name="tree-depth-first-search"></a>
## Depth first search
should be a function.

```js
expect(typeof index_1.depthFirst).toBe('function');
```

should return [A,B,D,C,E].

```js
expect(index_1.depthFirst(tree)).toEqual(['A', 'B', 'D', 'C', 'E']);
```

<a name="tree-depth-first-on-bettertree"></a>
## Depth first on betterTree
should be ordered: j, f, a, d, h, k, z.

```js
expect(index_1.depthFirst(betterTree)).toEqual(['j', 'f', 'a', 'd', 'h', 'k', 'z']);
```

<a name="tree-depth-first-post-order-search"></a>
## Depth first (post order) search
should be a function.

```js
expect(typeof index_1.depthFirstPost).toBe('function');
```

should return [D,B,E,C,A].

```js
expect(index_1.depthFirstPost(tree)).toEqual(['D', 'B', 'E', 'C', 'A']);
```

<a name="tree-depth-first-post-order-on-bettertree"></a>
## Depth first (post order) on betterTree
should be ordered: d, a, h, f, z, k, j.

```js
expect(index_1.depthFirstPost(betterTree)).toEqual(['d', 'a', 'h', 'f', 'z', 'k', 'j']);
```

<a name="tree-depth-first-in-order-on-bettertree"></a>
## Depth first (in order) on betterTree
should be ordered: a, d, f, h, j, k, z.

```js
expect(index_1.depthFirstIn(betterTree)).toEqual(['a', 'd', 'f', 'h', 'j', 'k', 'z']);
```

should be [A, B, C, D, E, F, G, H, I].

```js
expect(index_1.depthFirstIn(myTree)).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']);
```

<a name="tree-breadth-first-search"></a>
## Breadth first search
should be a function.

```js
expect(typeof index_1.breadthFirst).toBe('function');
```

should return [A,B,C,D,E].

```js
expect(index_1.breadthFirst(tree)).toEqual(['A', 'B', 'C', 'D', 'E']);
```

should return [A,B,C,D,E] with getValue.

```js
expect(index_1.breadthFirst(tree, function (n) { return n ? n.value : null; })).toEqual(['A', 'B', 'C', 'D', 'E']);
```

should return [A,B,C,D,E] with getValue, getChildren.

```js
expect(index_1.breadthFirst(tree, function (n) { return n.value; }, function (n) { return n.children; })).toEqual(['A', 'B', 'C', 'D', 'E']);
```

<a name="tree-no-depth-first-iterator"></a>
## NO Depth first iterator
should be ordered: j, f, a, d, h, k, z when looped.

```js
var items = ['j', 'f', 'a', 'd', 'h', 'k', 'z'];
var realItems = [];
index_1.depthFirst(betterTree).forEach(function (n) { return realItems.push(n); });
expect(realItems).toEqual(items);
```

