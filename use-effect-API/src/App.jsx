import Product from "./Product"
import './App.css'
import { useState } from "react"

function App(){
  let[showProduct,setshowProduct]=useState(false)



  return(
    <>
    <div>
      {
        showProduct==true?(<Product/>):<h1>no products avaliable</h1>
      }
      <button onClick={()=>{
        setshowProduct(true)
      }}>show</button>
       <button onClick={()=>{
        setshowProduct(false)
      }}>hide</button>
    </div>
    </>
  )
}
export default App
