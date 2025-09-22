import React from 'react'

export default function Coindetailcomponent({ coin }) {
  if (!coin.id) {
    return;
  }
  console.log(coin);



  return (
    <div className='container'>
      <div className='row coin-details '>
        <div className='col-12 '>
          <h1 className='mt-2'>Details of {coin.id} : </h1>
             <hr></hr>
        </div>
      </div>
   
      <div className='row coin-details' >
        <div className='col-12 col-md-6'>
          <div>
            <img src={coin.image.small} alt='Img'></img>
            <h4 className='mt-3'>{coin.name} - ({coin.symbol})</h4>
          </div>
          <div>
            <h4 className='mt-3'> Market Cap Rank :
              <span className='ms-2'>{coin.market_cap_rank}</span>
            </h4>
          </div>
          <div>
            <h4 className='mt-3'>  Market Cap :
              <span className='ms-2'>{coin.market_data.market_cap.usd != null ? coin.market_data.market_cap.usd.toLocaleString() :'-'}</span>
              <span className='ms-2 badge bg-success'>{coin.market_data.market_cap_change_percentage_24h !=null ? coin.market_data.market_cap_change_percentage_24h.toFixed(2)+ '$' :'-'}</span>
            </h4>
          </div>
          <div>
            <h4 className='mt-3'> Current Price :
              <span className='ms-2'>{coin.market_data.current_price.usd.toLocaleString()}$</span>
            </h4>
          </div>
        </div>

        <div className='col-12 col-md-6'>
          <div className='table-responsive'>
            <table className="table table-hover  ">
              <thead>
                <tr>
                  <th scope="col">24h</th>
                  <th scope="col">7d</th>
                  <th scope="col">30d</th>
                  <th scope="col">1y</th>
                </tr>
              </thead>
              <tbody className='table-group-divider '>
                {

                  <tr >

                    <td>{coin.market_data.price_change_percentage_24h !=null ? coin.market_data.price_change_percentage_24h.toFixed(2) + '$' : '-'}</td>
                    <td>{coin.market_data.price_change_percentage_7d  !=null ? coin.market_data.price_change_percentage_7d.toFixed(2) + '$' : '-'}</td>
                    <td>{coin.market_data.price_change_percentage_30d !=null ? coin.market_data.price_change_percentage_30d.toFixed(2)+ '$' : '-'}</td>
                    <td>{coin.market_data.price_change_percentage_1y  !=null ? coin.market_data.price_change_percentage_1y.toFixed(2)+ '$' : '-' }</td>


                  </tr>

                }
              </tbody>
            </table>
          </div>
        </div>

      </div>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <div>
            <h4 className='mt-2'>Low 24H:
              <span className='ms-2'>{coin.market_data.low_24h.usd !=null ?coin.market_data.low_24h.usd.toLocaleString() : '-'}</span>
            </h4>
          </div>
          <div>
            <h4 className='mt-3'>High 24H:
              <span className='ms-2'>{coin.market_data.high_24h.usd !=null ?coin.market_data.high_24h.usd.toLocaleString() : '-'}</span>
            </h4>
          </div>
        </div>
        <div className='col-12 col-md-6'>
          <div>
            <div>
              <h4 className='mt-2'>Total Supply:
                <span className='ms-2'>{coin.market_data.total_supply.toLocaleString()}</span>
              </h4>
            </div>
            <div>
              <h4 className='mt-3'>Circulating Supply:
                <span className='ms-2'>{coin.market_data.circulating_supply.toLocaleString()}</span>
              </h4>
            </div>
          </div>
        </div>

      </div>
      
      <hr></hr>
      <div className='row coin-details '>
       <div className='col-12'>
        <p dangerouslySetInnerHTML={{__html:coin.description.en}}></p>
       </div>
      </div>
    </div >
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

