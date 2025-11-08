import { expect, test } from 'vitest'

import Home from './page'
import { screen, render, fireEvent } from '@testing-library/react'

// this test verifies that all of the code executes as expected. This is the expected test format for this project
test('renders learn react link', () => {
    
    // getting all of the UI elements
    const { getByText } = render(<Home />)
    const itemName = screen.getByPlaceholderText("Item name")
    const itemPrice = screen.getByPlaceholderText("Initial bid price")
    const itemDescription = screen.getByPlaceholderText("Item description")
    const addItemButton = screen.getByTestId("add-item-button")
    const auctionNextItemButton = screen.getByTestId("auction-next-item-button")
    const bidderName = screen.getByPlaceholderText("Bidder name")
    const bidAmount = screen.getByPlaceholderText("Bid amount")
    const placeBidButton = screen.getByTestId("place-bid-button")
    const sellItemButton = screen.getByTestId("sell-item-button")
    const closeAuctionButton = screen.getByTestId("close-auction-button")

    // can't auction an item when none are available
    fireEvent.click(auctionNextItemButton) 
    fireEvent.click(sellItemButton)

    // create 2 items
    fireEvent.input(itemName, "Vase")
    fireEvent.input(itemDescription, "Just a vase")
    fireEvent.input(itemPrice, 10)
    fireEvent.click(addItemButton)
    fireEvent.input(itemName, "Lamp")
    fireEvent.input(itemDescription, "Just a lamp")
    fireEvent.input(itemPrice, 20)
    fireEvent.click(addItemButton)

    // begin auction
    fireEvent.click(auctionNextItemButton)

    // attempt to add item after auction begins
    fireEvent.click(addItemButton)

    // attempt to create 4 bids, some of which are invalid
    fireEvent.input(bidderName, "TW")
    fireEvent.input(bidAmount, 5)
    fireEvent.click(placeBidButton)

    fireEvent.input(bidderName, "TW")
    fireEvent.input(bidAmount, 15)
    fireEvent.click(placeBidButton)

    fireEvent.input(bidderName, "TW")
    fireEvent.input(bidAmount, 10)
    fireEvent.click(placeBidButton)

    fireEvent.input(bidderName, "TW")
    fireEvent.input(bidAmount, 15)
    fireEvent.click(placeBidButton)

    // sell the current item
    fireEvent.click(sellItemButton)

    // attempt (and fail) to close the auction after selling 1 item of 2
    fireEvent.click(closeAuctionButton)

    // auction the second item
    fireEvent.click(auctionNextItemButton)

    // bid on/sell second item
    fireEvent.input(bidderName, "TW")
    fireEvent.input(bidAmount, 25)
    fireEvent.click(placeBidButton)
    fireEvent.click(sellItemButton)

    // close the auction
    fireEvent.click(closeAuctionButton)
})