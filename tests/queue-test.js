import expect from 'expect'
import Queue from 'src/queue'


describe('Module template', () => {
    it('queue size is increased at putting a node', () => {
        let queue = new Queue()
        queue.put('node')
        expect(queue.size()).toBe(1)
    })

    it('queue size is decreased at getting a node', () => {
        let queue = new Queue()
        queue.put('node')
        queue.get()
        expect(queue.size()).toBe(0)
    })

    it('queue.get() returns null if the queue is empty', () => {
        let queue = new Queue()
        queue.put('node')
        queue.get()
        expect(queue.get()).toBeNull
    })

    it('queue: if exceptionOnExceed = true, get() causes exception', () => {
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

    it('queue: setting negative capacity causes exception', () => {
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

    it('queue: setting not an int capacity causes exception', () => {
        let cought = false
        try {
            let queue = new Queue({capacity: 'not int'})
        } catch(error) {
            cought = true
            expect(error.name).toBe('InvalidQueueCapacityValueError')
            expect(error.message).toBe('Queue capacity might be set only to a positive integer')
        } finally {
            expect(cought).toBe(true)
        }
    })

    it('queue: QueueCapacityExceededError thrown at exceeding queue capacity', () => {
        let cought = false
        let queue = new Queue({capacity: 1})
        queue.put(1)
        
        try {
            queue.put(2)    
        } catch(error) {
            cought = true
            expect(error.name).toBe('QueueCapacityExceededError')
            expect(error.message).toBe('Queue capacity can not exceed 1 value')
        } finally {
            expect(cought).toBe(true)
        }
    })

    it('queue.put(node) puts the node to the last index', () => {
        let queue = new Queue()
        queue.put(1)
        queue.put(2)
        expect(queue.get()).toBe(1)
        expect(queue.get()).toBe(2)
    })
})

