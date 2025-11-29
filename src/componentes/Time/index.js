import Colaborador from '../Colaborador';
import './Time.css';

const Times = (props) => {
    const backgroundColor = { backgroundColor: props.corSecundaria }
    const fontColor = { borderColor: props.corPrimaria, color: 'black' } 
    return (
        <section className='time' style={backgroundColor}>
            <h3 style={fontColor}>{props.nome}</h3>
            <div className='colaboradores'></div>
            {props.colaboradores.map(colaborador =>
                <Colaborador 
            key={colaborador.nome} 
            nome={colaborador.nome} 
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
            ></Colaborador>)}
        </section>
    )
}
export default Times