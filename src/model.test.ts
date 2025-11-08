import { expect, test } from 'vitest'
import {Model, Item, Bid, SoldItem} from './model'

test('model', () => {
    const model = new Model();
    expect(model.auctionStarted).toBeFalsy()
    expect(model.auctionEnded).toBeFalsy()
    expect(model.currentBids.length).toBe(0)
    expect(model.soldItems.length).toBe(0)
    expect(model.itemsToAuction.length).toBe(0)

    const item = new Item('a', 'b', 'c', 1)
    const bid = new Bid('d', 'e', 1)

    model.addItemToAuction(item)
    model.createNewBid(bid)
    model.addSoldItem(new SoldItem(item, bid))

    expect(model.soldItems[0].item.initialPrice).toBe(1)
})

