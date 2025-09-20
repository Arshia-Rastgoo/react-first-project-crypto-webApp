import React from 'react'

export default function Coindetailcomponent({coin}) {
  if(!coin.id){
    return;
  }
  console.log(coin);
  
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h2>Details of the {coin.id}</h2>
        </div>
      </div>
      <div className='row '>
        <div className='col-12 col-md-6'>1</div>
        <div className='col-12 col-md-6'>2</div>
      </div>
    </div>
  )
}
//  coin.image.small
//  coin.name
//  coin.symbol
//  coin.market_cap_rank
//  coin.market_data.market_cap.usd
//  coin.market_data.market_cap_change_percentage_24h
//  coin.market_data.current_price.usd

//  coin.market_data.price_change_percentage_24h
//  coin.market_data.price_change_percentage_7d
//  coin.market_data.price_change_percentage_30d
//  coin.market_data.price_change_percentage_1y

//  coin.market_data.low_24h.usd
//  coin.market_data.high_24h.usd
//  coin.market_data.total_supply
//  coin.market_data.circulating_supply

//  coin.description.en