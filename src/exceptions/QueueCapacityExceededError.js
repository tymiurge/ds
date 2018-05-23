export default function QueueCapacityExceededError(capacity) {
    this.name = 'QueueCapacityExceededError'
    this.message = 'Queue capacity can not exceed ' + capacity + ' value'
}