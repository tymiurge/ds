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
        let queue = new Queue({exceptionOnExceed: true})
        let cought = false
        queue.put('node')
        queue.get()
        try {
            queue.get()
        } catch(error) {
            cought = true
            expect(error.name).toBe('NullableQueueProcessingError')
            expect(error.message).toBe('No nodes in the queue')
        } finally {
            expect(cought).toBe(true)
        }
    })

    it('exception is thrown at setting negative capacity', () => {
        let cought = false
        try {
            let queue = new Queue({capacity: -2})
        } catch(error) {
            cought = true
            expect(error.name).toBe('InvalidQueueCapacityValueError')
            expect(error.message).toBe('Queue capacity might be set only to a positive integer')
        } finally {
            expect(cought).toBe(true)
        }
    })
})

