import expect from 'expect'
import Stack from 'src/stack'


describe('Module template', () => {
    it('stack size is increased at putting a node', () => {
        let stack = new Stack()
        stack.put('a node')
        expect(stack.size()).toBe(1)
    })

    it('stack: put(node) puts the node to the 0 index', () => {
        let stack = new Stack()
        stack.put('first node')
        stack.put('second node')
        expect(stack.get()).toBe('second node')
        expect(stack.get()).toBe('first node')
    })
})