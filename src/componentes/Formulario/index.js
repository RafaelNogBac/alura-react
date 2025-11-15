import Botao from "../Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import './Formulario.css'

const Formulario = () => {
    const aoSalvar = (evento) =>{
        evento.preventDefault()
        console.log('Form foi submetido => Formulario.js')
    }
      const lista = ["Programação", "Front-End", "Data Science", "Devops", "UX e Design", "Mobile", "Inovação e Gestão"]
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" obrigatorio="true" placeholder="Digite seu nome"/>
                <CampoTexto label="Cargo" obrigatorio="true" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem"/>
                <ListaSuspensa label="Time" itens={lista}/>
                <Botao texto="Criar Card"/>
            </form>
        </section>
    )
}
export default Formulario