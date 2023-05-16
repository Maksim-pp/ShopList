import React from 'react'
import CreateProduct from '../Components/CreateProduct/CreateProduct';
import Error from '../Components/Error/Error';
import Loader from '../Components/Loader/Loader';
import Modal from '../Components/Modal/Modal';
import Product from '../Components/Product/Product';
import { useProducts } from '../hooks/products';
import { IProduct } from '../models';
import { ModalContext } from '../Components/context/ModalContext';
import { useContext } from 'react';
import style from './ProductsPage.module.css';

export default function ProductsPage() {
    const { products, loading, error, addProducts } = useProducts()
    const { modal, open, close } = useContext(ModalContext)

    const createHandler = (product: IProduct) => {
        close()
        addProducts(product)
    }

    return (
        <div className={style.container}>
            {loading && <Loader />}
            {error && <Error error={error} />}
            {products.map(product => <Product product={product} key={product.id} />)}

            {modal && <Modal title='Create new product' onClose={close}>
                <CreateProduct onCreate={createHandler} />
            </Modal>}

            <button className={style.button} onClick={open}>+</button>
        </div>
    );
}
