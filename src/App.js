import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';


function App() {

  const times = [
    {
      nome: 'Familia',
      corPrimaria: '#E06869',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Amigos',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Colegas',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Idolos',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Artistas',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE9F5'
    }
  ]

  const [pessoas, setPessoas] = useState([])

  const aNovaPessoaAdicionada = (pessoa) => {
    setPessoas([...pessoas, pessoa])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoPessoaCadastrada={pessoa => aNovaPessoaAdicionada(pessoa)}/>
      {times.map(time => <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} pessoas={pessoas.filter(pessoa => pessoa.time === time.nome)}/>)}
      <Rodape />
    </div>
  );
}

export default App;
