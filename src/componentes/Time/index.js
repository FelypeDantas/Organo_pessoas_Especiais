import Pessoa from '../Pessoa';
import './Time.css';

const Time = (props) => {
    return(
        props.pessoas.length > 0 && <section className="time" style={{ backgroundColor: props.corSecundaria}}>
            <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='pessoas'>
                 {props.pessoas.map(pessoa => <Pessoa corDeFundo={props.corPrimaria} key={pessoa.nome} nome={pessoa.nome} cargo={pessoa.cargo} imagem={pessoa.imagem}/> )}
            </div>
        </section>
    )
}

export default Time