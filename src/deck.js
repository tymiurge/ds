
import CapacityExceededError from './exceptions/CapacityExceededError'
import InvalidCapacityValueError from './exceptions/InvalidCapacityValueError'

function Deck(options = {}) {
    let data = []
    let deckOptions = {
        /** default value is -1 - meaning the queue is not limited */
        capacity: 
            (function(capacityOffer) {
                let result = -1
                if (!(capacityOffer === undefined)) {
                    if (capacityOffer <= 0 || !Number.isInteger(capacityOffer)) {
                        throw new InvalidCapacityValueError()
                    }
                    result = capacityOffer
                }
                return result            
            })(options.capacity)
    }

    function exceedsCapacity(size) {
        const { capacity } = deckOptions
        if (size === capacity) {
            throw new CapacityExceededError(capacity)
        }
    }

    this.size = function() {
        return data.length
    }

    this.dequeue = function() {
        let node = data[0]
        data = data.slice(1, data.length)
        return node
    }

    this.putToTail = options.capacity > -1 
        ? function(node) {
            exceedsCapacity(this.size())
            data = [...data, node]
        }
        : function(node) {
            data = [...data, node]
        }

    this.putToHead = options.capacity > -1
        ? function(node) {
            exceedsCapacity(this.size())
            data = [node, ...data]
        }
        : function(node) {
            data = [node, ...data]
        }

    this.toArray = function() {
        return data;
    }
    
}

export default Deck