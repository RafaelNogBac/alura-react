import './ListaSuspensa.css'

const ListaSuspensa=(props) =>{
    console.log(props.itens)
    var lista = []
    return(
    <div className='lista-suspensa'>
        <label>{props.label}</label>
        <select>
            {props.itens.map(item =>{
            return <option key={item}>{item}</option>
        } )}
        </select>
    </div>
    )
}
export default ListaSuspensa