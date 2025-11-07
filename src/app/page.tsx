'use client'                              // directive to clarify client-side. Place at top of ALL .tsx files
import React from 'react'

import { Model } from '../model'

import styles from "./page.module.css"
import { ToAuctionItems, Bidding, AuctionNextItem, SoldItems, CloseAuction } from './boundary'
import "./globals.css";

// BOUNDARY OBJECT
export default function Home() {
 const [model, setModel] = React.useState(new Model())
 const [redraw, forceRedraw] = React.useState(0)

 let callbacks = {
    redrawToAuction: undefined,
    redrawBids: undefined,
    redrawSoldItems: undefined
 }

 // helper function that forces React app to redraw top level whenever this is called.
 function andRefreshDisplay() {
   forceRedraw(redraw + 1)
 }

  // https://gitlab03.wpi.edu/heineman/table  be sure to review!
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.bidMasterElement}>
          <ToAuctionItems model={model} andRefreshDisplay={andRefreshDisplay} callbacks={callbacks}/>
        </div>
        <div className={styles.bidMasterElement}>
          <AuctionNextItem model={model} andRefreshDisplay={andRefreshDisplay} callbacks={callbacks}/>
          <div className="spacer"></div>
          <Bidding model={model} andRefreshDisplay={andRefreshDisplay} callbacks={callbacks}/>
        </div>
        <div className={styles.bidMasterElement}>
          <h1>Items that have auctioned</h1>
          <div className="spacer"></div>
          <SoldItems model={model} andRefreshDisplay={andRefreshDisplay} callbacks={callbacks}/>
          <div className="spacer"></div>
          <b>Total net sales: ${model.totalNetSales}</b>
          <div className="spacer"></div>
          <CloseAuction model={model} andRefreshDisplay={andRefreshDisplay} callbacks={callbacks}/>
        </div>
      </main>
    </div>
  );
}
