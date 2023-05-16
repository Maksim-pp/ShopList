import style from './Error.module.css'

interface ErrorProps{
    error: string
}

const Error =(props:ErrorProps)=>{
    return(
        <p className={style.error}>{props.error}</p>
    )
}

export default Error;