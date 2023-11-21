import ListItem from "./ListItems/ListItem"
import {useEffect, useState} from 'react'
import axios from 'axios'



  
const Products = () =>
{
    const [items,setItems] =useState([])
    const [loader,setLoader]=useState(true)

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
            const response = await axios.get("https://mocki.io/v1/83dda85a-9d87-46e3-a0a0-a4fdefc9c0d0")
            const data=response.data.items
            const transformedData = data.map((item,index)=>{
                return {
                    ...item,
                    id:index
                }
            })
            setLoader(false)
            setItems(transformedData)
        }catch(err){
            console.log(err);
        }

        }
        fetchData()
    },[])
    return (
        <div className="product-list">
            <div className="product-list--wrapper">
                {
                    loader? <h1>Loading....</h1>: items.map((item,index)=>{
                        return <ListItem key={index} data={item}/>

                    })
                }
               
         
            </div>

        </div>
    )
}

export default Products