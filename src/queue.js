import NullableQueueProcessingError from './exceptions/NullableQueueProcessingError'
// https://eli.thegreenplace.net/2013/10/22/classical-inheritance-in-javascript-es5

// rear - at the back
// enqueue - put to a queue
// dequeue - remove from a queue


// Double-ended queue
// Circular queue
// priority queue
// 
function Queue(options = {}) {
    this.exceptionOnExceed = false || options.exceptionOnExceed
    this.queue = []
}

Queue.prototype.put = function(node) {
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
    this.queue = this.queue.slice(1, this.queue.length - 1)
    return node
}

Queue.prototype.constructor = Queue

export default Queue