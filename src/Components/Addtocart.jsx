
import React,{useEffect, useState} from 'react';
import "../Css/Addtocart.css"
const Addtocart = ({cart,setcart}) => {
  console.log(cart)
  const [price,setprice] = useState(0)
  const handlePrice = ()=>{
    let ans = 0;
    cart.map((item)=>{
      ans+=item.amount * item.price
    })
    setprice(ans)
  }

  const handleRemove = (id)=>{
    const arr = cart.filter((item)=>item.id !==id)
    setcart(arr);
    handlePrice()
  }
  useEffect(()=>{
    handlePrice()
  })
  return (
    <article>
      <h2>Cart</h2>
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.image} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        {/* <button className='btn btn-outline-dark px-3 '> + </button>
                        <button className='btn btn-outline-success border-3'>{item.amount}</button>
                        <button className='btn btn-outline-dark px-3' > - </button> */}
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button className='btn btn-danger btn-sm'  onClick={()=>handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Total Price of your Cart</span>
            {/* <span>Rs - {price}</span> */}
            <span>Rs - 1512</span>
        </div>
    </article>
  );
}

export default Addtocart;
