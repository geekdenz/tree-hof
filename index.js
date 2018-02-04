"use strict";
// {}[Symbol.iterator]
exports.__esModule = true;
var myObj = {
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
function isEmpty(queue) {
    return !queue.length;
}
function breadthFirst(tree, getValue, getChildren) {
    if (getValue === void 0) { getValue = function (obj) { return obj.value; }; }
    if (getChildren === void 0) { getChildren = function (obj) { return obj.children; }; }
    var queue = [tree];
    var result = [];
    var traverse;
    while (!isEmpty(queue)) {
        traverse = queue.shift();
        result.push(getValue(traverse));
        var children = getChildren(traverse) || [];
        children.map(function (child) { return queue.push(child); });
    }
    return result;
}
exports.breadthFirst = breadthFirst;
function depthFirst(tree, getValue, getChildren) {
    if (getValue === void 0) { getValue = function (obj) { return obj.value; }; }
    if (getChildren === void 0) { getChildren = function (obj) { return obj.children; }; }
    var result = [];
    function depth(tree) {
        var val = tree && getValue(tree) || null;
        val !== null && result.push(val);
        var children = tree && getChildren(tree) || [];
        children.map(function (child) { return depth(child); });
    }
    depth(tree);
    return result;
}
exports.depthFirst = depthFirst;
function depthFirstPost(tree, getValue, getChildren) {
    if (getValue === void 0) { getValue = function (obj) { return obj.value; }; }
    if (getChildren === void 0) { getChildren = function (obj) { return obj.children; }; }
    var result = [];
    function depthPost(tree) {
        var children = getChildren(tree) || [];
        children.map(function (child) { return depthPost(child); });
        var val = getValue(tree) || null;
        val !== null && result.push(val);
    }
    depthPost(tree);
    return result;
}
exports.depthFirstPost = depthFirstPost;
function depthFirstIn(tree, getValue, getChildren) {
    if (getValue === void 0) { getValue = function (obj) { return obj.value; }; }
    if (getChildren === void 0) { getChildren = function (obj) { return obj.children; }; }
    var result = [];
    function depthIn(tree) {
        var children = getChildren(tree) || [];
        var half = Math.ceil(children.length / 2);
        var left = children.slice(0, half);
        var right = children.slice(half);
        //console.log('half',half,left.value,right.value)
        left.map(function (child) { return depthIn(child); });
        var val = getValue(tree) || null;
        val !== null && result.push(val);
        right.map(function (child) { return depthIn(child); });
    }
    depthIn(tree);
    return result;
}
exports.depthFirstIn = depthFirstIn;
//# sourceMappingURL=index.js.map