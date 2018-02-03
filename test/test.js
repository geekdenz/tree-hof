const assert = require('assert');
const expect = require('expect')
const index = require('../index')
//const depthFirstIterator = index.depthFirstIterator
const breadthFirst = index.breadthFirst
const depthFirst = index.depthFirst
const depthFirstIn = index.depthFirstIn
const depthFirstPost = index.depthFirstPost
describe('Tree', function() {
  let tree = {
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
  }
  // https://www.cs.bu.edu/teaching/c/tree/breadth-first/
  let betterTree = {
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
  }
  /**
        A
        | \
        B  C
        |  \
        D   E
  */
  describe('Depth first search', () => {
    it('should be a function', () => {
      expect(typeof depthFirst).toBe('function')
    })
    it('should return [A,B,D,C,E]', function() {
      expect(depthFirst(tree)).toEqual(['A','B','D','C','E'])
    })
  })
  describe('Depth first on betterTree', () => {
    it('should be ordered: j, f, a, d, h, k, z', () => {
      expect(depthFirst(betterTree)).toEqual(['j', 'f', 'a', 'd', 'h', 'k', 'z'])
    })
  })
  describe('Depth first (post order) search', () => {
    it('should be a function', () => {
      expect(typeof depthFirstPost).toBe('function')
    })
    it('should return [D,B,E,C,A]', () => {
      expect(depthFirstPost(tree)).toEqual(['D','B','E','C','A'])
    })
  })
  describe('Depth first (post order) on betterTree', () => {
    it('should be ordered: d, a, h, f, z, k, j', () => {
      expect(depthFirstPost(betterTree)).toEqual(['d', 'a', 'h', 'f', 'z', 'k', 'j'])
    })
  })
  describe('Depth first (in order) on betterTree', () => {

    it('should be ordered: a, d, f, h, j, k, z', () => {
      expect(depthFirstIn(betterTree)).toEqual(['a', 'd', 'f', 'h', 'j', 'k', 'z'])
    })

    it('should be [A, B, C, D, E, F, G, H, I]', () => {
      const myTree = {
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
      }
      expect(depthFirstIn(myTree)).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'])
    })
  })
  describe('Breadth first search', () => {
    it('should be a function', () => {
      expect(typeof breadthFirst).toBe('function')
    })
    it('should return [A,B,C,D,E]', () => {
      expect(breadthFirst(tree)).toEqual(['A','B','C','D','E'])
    })
  })
})
