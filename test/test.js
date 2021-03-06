"use strict";
exports.__esModule = true;
//import * from 'assert';
var expect = require("expect");
//const index = require('../index')
var index_1 = require("../index");
//const depthFirstIterator = index.depthFirstIterator
/*
const breadthFirst = index.breadthFirst
const depthFirst = index.depthFirst
const depthFirstIn = index.depthFirstIn
const depthFirstPost = index.depthFirstPost
*/
var myTree = {
    value: 'F',
    children: [
        {
            value: 'B',
            children: [
                {
                    value: 'A'
                },
                {
                    value: 'D',
                    children: [
                        {
                            value: 'C'
                        },
                        {
                            value: 'E'
                        }
                    ]
                }
            ]
        },
        {
            value: 'G',
            children: [
                {},
                {
                    value: 'I',
                    children: [
                        {
                            value: 'H'
                        }
                    ]
                }
            ]
        }
    ]
};
describe('Tree', function () {
    var tree = {
        value: 'A',
        children: [
            {
                value: 'B',
                children: [
                    {
                        value: 'D'
                    }
                ]
            },
            {
                value: 'C',
                children: [
                    {
                        value: 'E'
                    }
                ]
            }
        ]
    };
    // https://www.cs.bu.edu/teaching/c/tree/breadth-first/
    var betterTree = {
        value: 'j',
        children: [
            {
                value: 'f',
                children: [
                    {
                        value: 'a',
                        children: [
                            {},
                            {
                                value: 'd'
                            }
                        ]
                    },
                    {
                        value: 'h'
                    }
                ]
            },
            {
                value: 'k',
                children: [
                    {},
                    {
                        value: 'z'
                    }
                ]
            }
        ]
    };
    /**
          A
          | \
          B  C
          |  \
          D   E
    */
    describe('Depth first search', function () {
        it('should be a function', function () {
            expect(typeof index_1.depthFirst).toBe('function');
        });
        it('should return [A,B,D,C,E]', function () {
            expect(index_1.depthFirst(tree)).toEqual(['A', 'B', 'D', 'C', 'E']);
        });
    });
    describe('Depth first on betterTree', function () {
        it('should be ordered: j, f, a, d, h, k, z', function () {
            expect(index_1.depthFirst(betterTree)).toEqual(['j', 'f', 'a', 'd', 'h', 'k', 'z']);
        });
    });
    describe('Depth first (post order) search', function () {
        it('should be a function', function () {
            expect(typeof index_1.depthFirstPost).toBe('function');
        });
        it('should return [D,B,E,C,A]', function () {
            expect(index_1.depthFirstPost(tree)).toEqual(['D', 'B', 'E', 'C', 'A']);
        });
    });
    describe('Depth first (post order) on betterTree', function () {
        it('should be ordered: d, a, h, f, z, k, j', function () {
            expect(index_1.depthFirstPost(betterTree)).toEqual(['d', 'a', 'h', 'f', 'z', 'k', 'j']);
        });
    });
    describe('Depth first (in order) on betterTree', function () {
        it('should be ordered: a, d, f, h, j, k, z', function () {
            expect(index_1.depthFirstIn(betterTree)).toEqual(['a', 'd', 'f', 'h', 'j', 'k', 'z']);
        });
        it('should be [A, B, C, D, E, F, G, H, I]', function () {
            expect(index_1.depthFirstIn(myTree)).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']);
        });
    });
    describe('Breadth first search', function () {
        it('should be a function', function () {
            expect(typeof index_1.breadthFirst).toBe('function');
        });
        it('should return [A,B,C,D,E]', function () {
            expect(index_1.breadthFirst(tree)).toEqual(['A', 'B', 'C', 'D', 'E']);
        });
        it('should return [A,B,C,D,E] with getValue', function () {
            expect(index_1.breadthFirst(tree, function (n) { return n ? n.value : null; })).toEqual(['A', 'B', 'C', 'D', 'E']);
        });
        it('should return [A,B,C,D,E] with getValue, getChildren', function () {
            expect(index_1.breadthFirst(tree, function (n) { return n.value; }, function (n) { return n.children; })).toEqual(['A', 'B', 'C', 'D', 'E']);
        });
    });
    // Deliberately cut:
    describe('NO Depth first iterator', function () {
        it('should be ordered: j, f, a, d, h, k, z when looped', function () {
            var items = ['j', 'f', 'a', 'd', 'h', 'k', 'z'];
            var realItems = [];
            index_1.depthFirst(betterTree).forEach(function (n) { return realItems.push(n); });
            expect(realItems).toEqual(items);
        });
    });
    // because it complicates and at the time of writing was not
    // supported in TypeScript.
    // Also, this does not add value of even performance, let
    // alone readability or anything else.
    describe('mapTree', function () {
        it('should iterate A,B,C,D,E', function () {
            var expected = ['A', 'B', 'C', 'D', 'E'];
            var count = 0;
            var f = function (item) { return expect(item).toEqual(expected[count++]); };
            index_1.mapBreadthFirst(tree, f);
        });
    });
    describe('bf(tree).map', function () {
        it('should return [A,B,C,D,E]', function () {
            var expected = ['A', 'B', 'C', 'D', 'E'];
            var count = 0;
            var f = function (item) { return expect(item).toEqual(expected[count++]); };
            expect(index_1.bf(tree).map(function (item) { return item; })).toEqual(expected);
        });
    });
});
//# sourceMappingURL=test.js.map