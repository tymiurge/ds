// make it Persistent data structures

function Stack(options = {}) {
    this.data = []
}

function enqueue(node) {
    this.data = [node].concat(this.data)
}

function dequeue() {
    let node = this.data[0]
    this.data = this.data.slice(1, this.data.length)
    return node
}

Stack.prototype.put = function(node) {
    enqueue.call(this, node)
}

Stack.prototype.size = function() {
    return this.data.length
}

Stack.prototype.get = function() {
    return dequeue.call(this)
}

Stack.prototype.constructor = Stack

export default Stack