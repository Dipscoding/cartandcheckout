import AddToCartIcon from "../../assets/icons/add_cart.png"
import {useState} from 'react'


const ListItem = ({data}) =>{


    const [counter,setCounter] = useState(0)

    const increaseCounterByOne = ()=>{
        setCounter(counter+1)

    }

    const decreaseCounterByOne = ()=>{
        if(counter>0){
            setCounter(counter-1)
        }
       
        
    }


 

    return (
        <div className="item-card">
            <img className="img-fluid" src={`/assets/${data.thumbnail}`} alt="imagetitle" ></img>
            <div className="item-card__information">
                <div className="pricing"><span>{data.discountedPrice}</span>
                <strike>{data.price}</strike></div>
                <div className="title"><h3>{data.title}</h3></div>
            </div>
            {
                counter<1 ? <button className="cart-add" onClick={increaseCounterByOne}>
                <span> Add to cart</span>
                 <img src={AddToCartIcon} alt="Cart Icon"/>
                 </button>: <div className="cart-addon">
                    <button onClick ={decreaseCounterByOne}><span>-</span></button>
                    <span className="counter">{counter}</span>
                    <button onClick ={increaseCounterByOne}><span>+</span></button>
                </div>
            }

            {/* <button className="cart-add">
               <span> Add to cart</span>
                <img src={AddToCartIcon} alt="Cart Icon"/>
                </button>
                <div className="cart-addon">
                    <button><span>-</span></button>
                    <span className="counter">{datas}</span>
                    <button><span>+</span></button>
                </div> */}
        

        </div>
    )
}


export default ListItem;