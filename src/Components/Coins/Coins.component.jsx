import React from 'react'
import "./Coins.css"
import { Link } from 'react-router-dom'
export default function Coinscomponent({ data }) {
    return (
        <div className='table-responsive'>
            <table className="table table-hover  ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Logo</th>
                        <th scope="col">Symbol</th>
                        <th scope="col">Price</th>
                        <th scope="col">24h %</th>
                        <th scope="col">Volume</th>
                        <th scope="col">Market cap</th>
                        {/* <th scope="col">Price</th>
                    <th scope="col">Price</th> */}
                    </tr>
                </thead>
                <tbody className='table-group-divider '>







                    {
                        // data.map((coin) => (
                        //     <tr key={coin.market_cap_rank}>
                        //         <th scope='row'>{coin.market_cap_rank}</th>
                        //         <td><img src={coin.image} alt='Coin' className='coin-logo'></img></td>
                        //         <td><Link to={`/coin/${coin.id}`}>{coin.symbol}</Link></td>
                        //         <td>{coin.current_price.toLocaleString()}$</td>
                        //         <td>{coin.price_change_percentage_24h.toFixed(2)}%</td>
                        //         <td>{coin.total_volume.toLocaleString()}</td>
                        //         <td>{coin.market_cap.toLocaleString()}</td>

                        //     </tr>
                        // ))
                        data.map((coin) => (
                            <tr key={coin.market_cap_rank ?? ''}>
                                <th scope="row">{coin.market_cap_rank ?? '-'}</th>
                                <td><img src={coin.image ?? ''} alt="Coin" className="coin-logo" /></td>
                                <td><Link to={`/coin/${coin.id}`}>{coin.symbol ?? ''}</Link></td>
                                <td>{coin.current_price != null ? coin.current_price.toLocaleString() + '$' : '-'}</td>
                                <td>{coin.price_change_percentage_24h != null ? coin.price_change_percentage_24h.toFixed(2) + '%' : '-'}</td>
                                <td>{coin.total_volume != null ? coin.total_volume.toLocaleString() : '-'}</td>
                                <td>{coin.market_cap != null ? coin.market_cap.toLocaleString() : '-'}</td>
                            </tr>
                        ))

                    }
                </tbody>
            </table>
        </div>
    )
}
