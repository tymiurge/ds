// make it Persistent data structures
import Deck from './deck'

function Stack(options = {}) {
    this.options = {
        /** default value is -1 - meaning the queue is not limited */
        /*
        capacity: 
            (function(capacityOffer) {
                let result = -1
                if (!(capacityOffer === undefined)) {
                    if (capacityOffer <= 0 || !Number.isInteger(capacityOffer)) {
                        throw new InvalidQueueCapacityValueError()
                    }
                    result = capacityOffer
                }
                return result            
            })(options.capacity)
        */
    }
    Deck.call(this, options)
}

Stack.prototype = Object.create(Deck.prototype)

Stack.prototype.put = function(node) {
    this.putToHead(node)
}


Stack.prototype.get = function() {
    return this.dequeue()
}

export default Stack