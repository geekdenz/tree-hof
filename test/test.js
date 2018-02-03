const assert = require('assert');
const expect = require('expect')
const index = require('../index')
const depthFirstIterator = index.depthFirstIterator
const breadthFirst = index.breadthFirst
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
  describe('Depth first search', () => {
    it('should be a function', () => {
      expect(typeof depthFirstIterator).toBe('function')
    })
    it('should traverse the tree in depth first order', function() {

      //expect(depthFirstIterator(tree)).toBe(['A'])
    })
  })
  describe('Breadth first search', () => {
    it('should return [A,B,C,D,E]', () => {
      expect(breadthFirst(tree)).toEqual(['A','B','C','D','E'])
    })
  })
})
