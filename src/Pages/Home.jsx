import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Singleitem from '../components/Singleitem';

const Home = () => {

    const API_URL = "https://fakestoreapi.com/products";


    const [loading,setloading] = useState(false);
    const [itemsdata,setitemsdata] = useState([])

    async function fetchitemdata()
    {
        setloading(true);
        
        try
        {
          const response = await fetch(API_URL)
          const data = await response.json();
          setitemsdata(data)
          console.log(data)
        }
        catch(error)
        {
            console.log("error in API call")
        }
        setloading(false)
    }

    useEffect(()=>{
        fetchitemdata();
    },[])

  return (
    <div className='w-[90%] mx-auto h-[92%] flex justify-center flex-wrap items-center gap-5 py-6'>
        {
            loading ? (<Spinner/>) : 
            (
                itemsdata.length > 0 ? 
                      (itemsdata.map(item => (<Singleitem item={item} key={item.id}/>)))
                : <div>NO DATA Found</div>
            )
        }
    </div>
  )
}

export default Home