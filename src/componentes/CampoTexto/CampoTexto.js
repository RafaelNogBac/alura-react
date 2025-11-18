import './CampoTexto.css'
import { useState } from 'react'
//Arrow function para melhorar a  legibilidade do código
const CampoTxt = (props) => {
    const placeholderFormatado= `${props.placeholder}...`
    const [ valor, setValor ] = useState('')
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderFormatado}/>
        </div>
    )
}
export default CampoTxt