import expect from 'expect'
import Stack from 'src/stack'


describe('Stack tests', () => {
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

    it('stack.toArray returns array of previously added nodes', () => {
        let stack = new Stack()
        const nodes = ['first', 'second']
        nodes.forEach(node => stack.put(node))
        const reversedNodes = nodes.reverse()
        expect(
            stack.toArray().every( (node, idx) => reversedNodes[idx] === node ) 
        ).toBeTruthy()
    })

    it('stack: CapacityExceededError at exceeding capacity', () => {
        let stack = new Stack({capacity: 1})
        stack.put('first node')
        let cought = false
        try {
            stack.put('second node')
        } catch (err) {
            cought = true
        } finally {
            expect(cought).toBeTruthy()
        }
    })
})