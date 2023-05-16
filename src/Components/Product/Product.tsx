import style from './Product.module.css'
import {IProduct} from '../../models'
import { useState } from 'react'

interface ProductProps {
    product: IProduct
}

const Product = ( { product } : ProductProps) =>{

    const [details, setDetails] = useState(false)
    
    let showButton=()=>{
        setDetails(prev=> !prev)
    }

    return(
        <div className={style.block}>
            <img src={product.image} className={style.image}/>
            <p>{product.title}</p>
            <p className={style.price}>{product.price}$</p>
            { !details 
            ? <button className={style.button_show} onClick={showButton}>Show Details</button>
            : <button className={style.button_hide} onClick={showButton}>Hide Details</button>
            }
            {details && <div>
                <p>{product.description}</p> 
                <p>Rate: <span className={style.rate}>{product?.rating?.rate}</span></p>
            </div>}
        </div>
    )
}

export default Product;