let data = []

function Deck() {}

Deck.prototype.size = function() {
    return data.length
}

Deck.prototype.dequeue = function() {
    let node = data[0]
    data = data.slice(1, data.length)
    return node
}

Deck.prototype.enqueue = function(node) {
    data.push(node)
}

export default Deck