import expect from 'expect'
import Queue from 'src/queue'


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

    it('test whether null is returned at processing nullable queue', () => {
        let queue = new Queue()
        queue.put('node')
        queue.get()
        expect(queue.get()).toBeNull
    })

    it('if Queue.exceptionOnExceed is true than exception is thrown at processing null queue', () => {
        let queue = new Queue()
        queue.put('node')
        queue.get()
        try {
            queue.get()
        } catch(error) {
            expect(error.name).toBe('NullableQueueProcessingError')
            expect(error.message).toBe('No nodes in the queue')
        }
    })
})

