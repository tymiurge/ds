function Stack(options = {}) {
    this.data = []
}

function enqueue(node) {
    this.data = [node].concat(this.data)
}

Stack.prototype.put = function(node) {
    enqueue.call(this, node)
}

Stack.prototype.size = function() {
    return this.data.length
}

Stack.prototype.constructor = Stack

export default Stack