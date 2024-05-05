import React, { useEffect, useState } from "react";
import image from '../images/image.jpg'
import ShoppingService from "../service/ShoppingService";
import './ShoppingPage.css'

function ShoppingPage(){

   const [data ,setdata] = useState([]);
   const[current,setcurrent]=useState(false)
   const [loading, setLoading] = useState(true);
   useEffect(()=>{
    try{
   const response = ShoppingService.getAllEmployee()
   .then(response=>setdata(response.data.products));
   console.log(response.data.products);
}catch (error) {
    console.error(error);
  }
   },[current])
   
   //same using async and await
   useEffect(() => {
    const fetchData = async () => {
       try {
        setLoading(true);
          const response = await ShoppingService.getAllEmployee();
        
          setdata(response.data.products);
          console.log(response.data.products);
       } catch (error) {
          console.error(error);
       } 
       finally {
        setLoading(false); // Set loading to false whether the request succeeds or fails
     }
    };
 
    fetchData(); 
    
 }, [current]);
   return(
    
<div>
    <div>
         <input onClick={()=>{setcurrent((val)=>!val)}}  type="button" name="shopping"   value={current ? "Hide Products" : "Show Products"} />
    </div>
    {loading ? (
            <p>Loading...</p>
         ) :<div>
{current?(
  
  <div className="content">
    <div className="header">
<h1>Products List</h1>
</div>

<div className="products">
  {
    data.map((product)=>(
    <div className="items" key={product.id}>
      <p>{product.title}</p>
<img src= {image} alt="Images not found" />
<p>{product.stylec}</p>
 <p>Price: {product.price} {product.currencyFormat}</p>

    </div>
    ))
  }
</div>
</div>
):null}
</div>}

</div>
    );
}

export default ShoppingPage;