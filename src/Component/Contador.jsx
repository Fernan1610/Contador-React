import React,{useState} from "react";
import style from './Styles/Contador.module.css'

export default function Contador(){
    const [contador,setContador]=useState(0);
    function incrementar(e){
        e.preventDefault();
        if(contador >=0){
            setContador(contador+1);
        }

    }
    function decrementar(e){
        e.preventDefault();
        if(contador >= 1){
            setContador(contador-1);
        }
    }
    function reiniciarCont(e){
        e.preventDefault();
        setContador(0);
    }
    return(
        <>
            <div className="display">
                <h1 className={style.h1}>{contador}</h1>
            </div>
            <div className={style.divButton}>
                <button className={style.button} onClick= {decrementar}>➖</button>
                <button className={style.button} onClick={reiniciarCont}>🔄</button>
                <button className={style.button} onClick={incrementar}>➕</button>

            </div>
        </>
    )
}
