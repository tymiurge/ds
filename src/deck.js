let data = []

function Deck() {}

Deck.prototype.size = function() {
    return data.length
}

Deck.prototype.dequeue = function() {
    let node = data[0]
    this.data = data.slice(1, data.length)
    return node
}

export default Deck