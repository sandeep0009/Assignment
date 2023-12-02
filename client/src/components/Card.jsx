import axios from "axios";
import { useEffect, useState } from "react";


const API="https://api.punkapi.com/v2/beers"
const Card = () => {
    const[mydata,setData]=useState([]);

    const[query,setquery]=useState("b");
    const getProducts = async () => {
    try {
      const res = await axios.get(API, {
        params: { beer_name: query }
      });
      setData(res.data);
    } catch (error) {
      console.error(error);
    }
  };
    useEffect(()=>{
       getProducts(`${API}&s=${query}`);
    },[query]);
  return (

    <>

    <div className="search-container">
        <input type="text"
        value={query}
        placeholder="search"
        onChange={(e)=>setquery(e.target.value.toLowerCase())} />
    </div>

 

    
  
    <div className="container">
        <div className="container-inside">
            { mydata.map((post)=>{
                const {id,name,description,image_url}=post;
                return (<div className="card" key={id}>
                    <h2>Title:{name}</h2>
                    <p><span>Desc: </span>{description}</p>
                    <span>Image:</span><img className="image" src={image_url} alt="" />
                </div>)

            })}
        </div>
       
    </div>
    </>

        
 
  )
}

export default Card