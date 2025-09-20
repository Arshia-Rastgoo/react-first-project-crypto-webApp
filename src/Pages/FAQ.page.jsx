import React from 'react'

export default function FAQpage() {
  return (
    <div className='container'>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                What is the blockchain programming?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Blockchain programming</strong> is the practice of writing software that interacts with blockchain networks to create, read, update, or validate data stored on a decentralized ledger. It combines ideas from cryptography, distributed systems, and smart contract development to build applications that run on or with blockchains.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              What is crypto tracking?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Crypto tracking refers to the process of</strong>  monitoring and analyzing cryptocurrency assets, markets, and on-chain activity. It can involve a mix of price surveillance, portfolio management, and blockchain analytics to gain insights, manage risk, and make informed decisions.


            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              What is Price Action?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Price Action is a method </strong> of analyzing financial markets, including cryptocurrencies, by studying the movements of price itself rather than relying on external indicators or complex models. Traders who use price action focus on how price behaves and what it implies about supply and demand, trend strength, and potential reversals.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">
             What is MetaTrader?
            </button>
          </h2>
          <div id="collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>MetaTrader </strong>  is a popular family of trading platforms developed by MetaQuotes Software Corp. that enables traders to access financial markets, analyze price data, and automate trading strategies. There are two main versions used by traders:
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
