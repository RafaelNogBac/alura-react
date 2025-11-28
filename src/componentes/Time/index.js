import './Time.css';

const Times = (props) => {
    const backgroundColor = { backgroundColor: props.corSecundaria }
    const fontColor = { borderColor: props.corPrimaria, color: 'black' } 
    return (
        <section className='time' style={backgroundColor}>
            <h3 style={fontColor}>{props.nome}</h3>
        </section>
    )
}
export default Times