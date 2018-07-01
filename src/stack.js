import Deck from './deck'
//  Crockford's private pattern

const Stack = (function() {
    function Stack(options = {}) {
        this.options = {
            // for future use
        }
        Deck.call(this, options)    
    }
    
    Stack.prototype.put = function(node) {
        this.putToHead(node)
    }

    Stack.prototype.get = function() {
        return this.dequeue()
    }

    return Stack
        
})()

export default Stack