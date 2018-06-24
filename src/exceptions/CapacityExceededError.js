export default function CapacityExceededError(capacity) {
    this.name = 'CapacityExceededError'
    this.message = 'Capacity can not exceed ' + capacity + ' value'
}