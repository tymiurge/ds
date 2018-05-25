import NullableQueueProcessingError from './exceptions/NullableQueueProcessingError'
import InvalidQueueCapacityValueError from './exceptions/InvalidQueueCapacityValueError'
import QueueCapacityExceededError from './exceptions/QueueCapacityExceededError'
// https://eli.thegreenplace.net/2013/10/22/classical-inheritance-in-javascript-es5

// different approaches of creating classes/modules in JS:
// https://stackoverflow.com/questions/55611/javascript-private-methods

// rear - at the back
// enqueue - put to a queue
// dequeue - remove from a queue


// Double-ended queue
// Circular queue
// priority queue
// 
function Queue(options = {}) {
    this.exceptionOnExceed = false || options.exceptionOnExceed
    this.capacity = -1
    var capacityOffer = options.capacity
    if (!(capacityOffer === undefined)) {
        if (capacityOffer <= 0 || !Number.isInteger(capacityOffer)) {
            throw new InvalidQueueCapacityValueError()
        }
        this.capacity = capacityOffer
    }
    this.queue = []
}

Queue.prototype.put = function(node) {
    if (this.capacity !== -1 && this.queue.length === this.capacity) {
        throw new QueueCapacityExceededError(this.capacity)
    }
    this.queue.push(node)
}

Queue.prototype.size = function() {
    return this.queue.length
}

Queue.prototype.get = function() {
    if (this.queue.length === 0) {
        if (this.exceptionOnExceed) { 
            throw new NullableQueueProcessingError() 
        } else {
            return null
        }
    }
    let node = this.queue[0]
    this.queue = this.queue.slice(1, this.queue.length)
    return node
}

Queue.prototype.constructor = Queue

export default Queue