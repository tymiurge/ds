import expect from 'expect'
import  Queue  from 'src/queue'


describe('Module template', () => {

    it('queue size is 0 just after creating queue', () => {
        let q1 = new Queue()
        q1.put('node in q1')
        let q2 = new Queue()
        expect(q2.size()).toBe(0)
    })


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

    it('queue: if inexhaustive = false, get() causes exception', () => {
        let queue = new Queue({inexhaustive: false})
        let cought = false
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
            expect(error.name).toBe('InvalidCapacityValueError')
            expect(error.message).toBe('Queue or Stack capacity might be set only to a positive integer')
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
            expect(error.name).toBe('InvalidCapacityValueError')
            expect(error.message).toBe('Queue or Stack capacity might be set only to a positive integer')
        } finally {
            expect(cought).toBe(true)
        }
    })

    it('queue: CapacityExceededError thrown at exceeding queue capacity', () => {
        let cought = false
        let queue = new Queue({capacity: 1})
        queue.put(1)
        
        try {
            queue.put(2)    
        } catch(error) {
            cought = true
            expect(error.name).toBe('CapacityExceededError')
            expect(error.message).toBe('Capacity can not exceed 1 value')
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

