export class Model {
    
    itemsToAuction: Item[]
    currentItem?: Item
    auctionStarted : boolean
    currentBids : Bid[]
    soldItems : SoldItem[]
    totalNetSales : number
    auctionEnded: boolean

    // Auction BidMaster
    //
    // Keep track of Items being auctioned
    constructor() {
        this.itemsToAuction = [
            //new Item('1', "Antique Vase","Vase",1),
            //new Item('2', "Vintage Watch","A watch",1),
            //new Item('3', "Painting by Famous Artist","Van Gogh",1000),
        ]
        this.auctionStarted = false
        this.currentBids = []
        this.soldItems = []
        this.totalNetSales = 0
        this.auctionEnded = false
    }

    addItemToAuction(item: Item) {
        this.itemsToAuction.push(item)
    }

    createNewBid(bid:Bid){
        this.currentBids.push(bid)
    }

    addSoldItem(item: SoldItem){
        this.soldItems.push(item)
    }
}

export class Item {
    name : string
    id : string
    description: string
    initialPrice: number

    constructor(id:string, name: string, description: string, initialPrice: number) {
        this.name = name;
        this.id = id;
        this.description = description
        this.initialPrice = initialPrice
    }
}

export class Bid {
    name : string
    id : string
    amount : number

    constructor(id:string, name:string, amount:number){
        this.id = id;
        this.name = name;
        this.amount = amount;
    }
}

export class SoldItem{
    item : Item
    finalBid : Bid

    constructor(item: Item, finalBid: Bid){
        this.item = item
        this.finalBid = finalBid
    }
}