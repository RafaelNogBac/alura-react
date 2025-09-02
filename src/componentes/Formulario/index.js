import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import './Formulario.css'

const Formulario = () => {
      const lista = ["Programação", "Front-End", "Data Science", "Devops", "UX e Design", "Mobile", "Inovação e Gestão"]
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem"/>
                <ListaSuspensa label="Tipo" itens={lista}/>
            </form>
        </section>
    )
}
export default Formulario