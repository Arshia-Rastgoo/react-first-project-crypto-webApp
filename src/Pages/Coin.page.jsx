import React from 'react'
import { use, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { detailsUrl } from '../constants/api'
import axios from 'axios';
import Spinnercomponent from '../Components/UI/Spinner.component';
import Coindetailcomponent from '../Components/Coins/Coindetail.component';


export default function Coinpage() {

    const paramObject = useParams();
    const url = detailsUrl(paramObject.id)


    
    
    const [coin, setCoin] = useState({});
    const [loading, setLoading] = useState([false]);
    const [error, setError] = useState([""]);

    useEffect(() => {
        setLoading(true);
        axios(url)
            .then((response) => {
                setLoading(false);
                setCoin(response.data)
                console.log(response.data);

            })
            .catch((error)=> setError("An Error has occured !"))
    }, []);


    return (
        <div className='container'>
            {
                loading ? <Spinnercomponent />  : error === "" ? <h1>{error}</h1> : <Coindetailcomponent coin={coin} />
            }
        </div>
    )
}
