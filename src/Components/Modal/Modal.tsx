import React from 'react'
import style from './Modal.module.css'

interface ModalProps{
    children: React.ReactNode
    title: string
    onClose: ()=> void
}

export default function Modal(props: ModalProps) {
    return (
        <>
            <div className={style.block} onClick={props.onClose}>

            </div>
            <div className={style.modal}>
                <h1 className={style.title}>{props.title}</h1>
                {props.children}
            </div>
        </>
    )
}
