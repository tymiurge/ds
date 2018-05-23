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
    let exceptionOnExceed = false || options.exceptionOnExceed
    let queue = []
}

Queue.prototype.put = function(node) {
    queue.push(node)
}

Queue.prototype.size = function() {
    return queue.length
}

Queue.prototype.get = function() {
    if (queue.length === 0) {
        if (exceptionOnExceed) { 
            throw new NullableQueueProcessingError() 
        } else {
            return null
        }
    }
    let node = queue[0]
    queue = queue.slice(1, this.queue.length - 1)
    return node
}

Queue.prototype.constructor = Queue

export default Queue