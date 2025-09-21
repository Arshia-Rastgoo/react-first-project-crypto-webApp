import React, { use, useEffect, useState } from 'react'
import Spinnercomponent from '../Components/UI/Spinner.component'
import axios from 'axios';
import { baseUrl } from '../constants/api';
import Coinscomponent from '../Components/Coins/Coins.component';
export default function Homepage() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([false]);
  const [error, setError] = useState([""]);

  useEffect(() => {
    setLoading(true);
    axios(baseUrl)
      .then(response => {
        setLoading(false);
        setData(response.data)
        console.log(response.data);
        
      })
      .catch(error => setError("An Error has occured !"))
  }, []);

  return (

    <div className='container'>
      <div className='row'></div>
      <div className='col-12 text-center' >
        <h1 className='mt-2'>Crypto Tracking</h1>
        <h4 className='mt-3' >A place to manage all your trade informations and actions</h4>
        <h4>Do not forget to use risk management for your assets !</h4>
      </div>

      <div className='row'>
        <div className='col-12' >
          {loading ? <Spinnercomponent /> : error ==="" ? <h1>{error}</h1> : <Coinscomponent data={data}/>}
          
        </div>
      </div>
    </div>
  )
}
