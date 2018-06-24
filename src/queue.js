import NullableQueueProcessingError from './exceptions/NullableQueueProcessingError'
import Deck from './deck'
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
    this.options = {
        /** if false NullableQueueProcessingError is thrown at performing get operation on empty queue */
        inexhaustive: options.inexhaustive === undefined ? true : options.inexhaustive,
    }
    Deck.call(this, options)
}

Queue.prototype = Object.create(Deck.prototype)

Queue.prototype.put = function(node) {
    this.putToTail(node)
}

Queue.prototype.get = function() {
    if (!this.options.inexhaustive && this.size() === 0) {
        throw new NullableQueueProcessingError()
    } 
    return this.dequeue()
}

export default Queue