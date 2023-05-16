import React, { useState } from 'react'
import style from './CreateProduct.module.css'
import axios from 'axios'
import { IProduct } from '../../models'
import Error from '../Error/Error'

const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic', 
    rating :{
        rate: 42,
        count: 10
    }
}
interface CreateProductProps{
    onCreate:(product: IProduct)=> void
}

export default function CreateProduct(props: CreateProductProps) {

    const[title,setTitle]= useState('')
    const[price,setPrice]= useState('')
    const[description,setDescription]= useState('')
    const[image,setImage]= useState('')
    const[category,setCategory]= useState('')
    const[error, SetError] = useState('')
    

    const submitHandler =async (event: React.FormEvent)=>{
        event.preventDefault()

        if(title.trim().length === 0){
            SetError('Please enter the field')
        }

        productData.title = title
        productData.price = price
        productData.description= description
        productData.image=image
        productData.category= category
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

        props.onCreate(response.data)
    }

    const changeHandlerTitle =(event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const changeHandlerPrice =(event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.value)
    }
    const changeHandlerDescription =(event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
    }
    const changeHandlerImage =(event: React.ChangeEvent<HTMLInputElement>) => {
        setImage(event.target.value)
    }
    const changeHandlerCategory =(event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <input type='text' className={style.item} placeholder='Enter product title...' value={title} onChange={changeHandlerTitle}/>
            </div>
            <div>
                <input type='number' className={style.item} placeholder='Enter product price...' value={price} onChange={changeHandlerPrice}/>
            </div>
            <div>
                <input type='text' className={style.item} placeholder='Enter product description...' value={description} onChange={changeHandlerDescription}/>
            </div>
            <div>
                <input type='text' className={style.item} placeholder='Enter product image...' value={image} onChange={changeHandlerImage}/>
            </div>
            <div>
                <input type='text' className={style.item} placeholder='Enter product category...' value={category} onChange={changeHandlerCategory}/>
            </div>
            

            {error &&<Error  error={error}/> }

            <button className={style.button}>Create</button>
        </form>
    )
}
