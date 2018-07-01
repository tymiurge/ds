import Deck from './../src/deck'
import expect from 'expect'

describe('Deck tests', () => {
    it('deck.toArray returns empty array if no nodes have been added', () => {
        let deck = new Deck()
        console.log(deck.toArray())
        expect(deck.toArray().length).toBe(0)
    })
})
