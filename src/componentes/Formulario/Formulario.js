import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa';
import './Formulario.css'

const Formulario = (props) => {
    const times=["Programação", "Front-End", "Data Science", "Devops", "UX e Design", "Mobile", "Inovação e Gestão"]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoColaboradorCadastrado({
             nome,
            cargo,
            imagem,
            times
        })
        console.log('Form foi submetido => Formulario.js') 
    }
    
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto valor={nome} aoAlterado={valor => setNome(valor)} label="Nome" obrigatorio="true" placeholder="Digite seu nome"/>
                <CampoTexto valor={cargo} aoAlterado={valor => setCargo(valor)} label="Cargo" obrigatorio="true" placeholder="Digite seu cargo"/>
                <CampoTexto valor={imagem} aoAlterado={valor => setImagem(valor)} label="Imagem" placeholder="Informe o endereço da imagem"/>
                <ListaSuspensa label="Time" itens={times}/>
                <Botao texto="Criar Card"/>
            </form>
        </section>
    )
}
export default Formulario