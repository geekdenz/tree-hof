"use strict";
// {}[Symbol.iterator]
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
function depthFirstIterator(tree, getValue, getChildren) {
    if (getValue === void 0) { getValue = function (obj) { return obj.value; }; }
    if (getChildren === void 0) { getChildren = function (obj) { return obj.children; }; }
    var items = depthFirst(tree, getValue, getChildren);
    function it() {
        var _i, items_1, item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, items_1 = items;
                    _a.label = 1;
                case 1:
                    if (!(_i < items_1.length)) return [3 /*break*/, 4];
                    item = items_1[_i];
                    return [4 /*yield*/, item];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    }
    return it();
}
exports.depthFirstIterator = depthFirstIterator;
//# sourceMappingURL=index.js.map