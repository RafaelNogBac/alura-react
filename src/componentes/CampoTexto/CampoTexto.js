import './CampoTexto.css'
//Arrow function para melhorar a  legibilidade do código
const CampoTxt = (props) => {
    const placeholderFormatado= `${props.placeholder}...`
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={placeholderFormatado}/>
        </div>
    )
}
export default CampoTxt