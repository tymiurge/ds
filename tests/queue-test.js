import expect from 'expect'
import Queue from './../src/queue'


describe('Module template', () => {
    it('test whether size is increased at putting a node', () => {
        let queue = new Queue()
        queue.put('node')
        expect(queue.size()).toBe(1)
    })

    it('test whether size is decreased at getting a node', () => {
        let queue = new Queue()
        queue.put('node')
        queue.get()
        expect(queue.size()).toBe(0)
    })

    it('', () => {
        let queue = new Queue()
        queue.put('node')
        queue.get()
        queue.get()
    })
})

