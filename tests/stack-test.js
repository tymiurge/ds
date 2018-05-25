import expect from 'expect'
import Stack from 'src/stack'


describe('Module template', () => {
    it('stack size is increased at putting a node', () => {
        let stack = new Stack()
        stack.put('a node')
        expect(stack.size()).toBe(1)
    })
})