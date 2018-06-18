function Foo(who) {
    this.me = who
}

Foo.prototype.identify = function() {
    return 'I am ' + this.me
}

function Bar(who) {
    Foo.call(this.who);
}

Bar.prototype = Object.create(Foo.prototype)

Bar.prototype.speak = function() {
    alert('Hello, ' + this.identify() + '.')
}

export default Bar

//var b1 = new Bar('b1')
//var b2 = new Bar('b2')

