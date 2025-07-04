import { useEffect, useState } from "react"

function Product() {
    let [change, setchange] = useState("samsung")
    let [price,setprice]=useState("200")
    function onchange() {

        setchange("iphone")
        
    }
    function pricechange(){
        setprice("50000")
    }
    useEffect(() => {
        console.log("hello")
        return(()=>{
            console.log("deleted")
        })
    },[price])
    return (

        <div>
            <h1>product component</h1>
            <div className="product">

                <h2>{change}</h2>
                <h3>{price}</h3>
                <button onClick={onchange}>click</button>
                <button onClick={pricechange}>change price</button>
            </div>

        </div>
    )
}
export default Product