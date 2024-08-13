import React, {Component} from 'react';
import TabelaBody from './components/TabelaBody';
import TabelaHead from './components/TabelaHead';
import TabelaFoot from './components/TabelaFoot';
import { render } from '@testing-library/react';


class App extends Component {
  state = {
    livros:[
      {
        id: "978-8-7522-632-2",
        titulo: "CSS Grid Layout",
        autor: "Mauricio Samy Silva"
      },
      {
        id: "978-8-7522-677-3",
        titulo: "Node Essencial",
        autor: "Ricardo R. lecehta"
      },
      {
        id: "978-8-7522-512-7",
        titulo: "Aprendendo Material Design",
        autor: "Kyle Mew                                              "
      },
    ]
  }
  render(){
    return (
      <table className='tabela'>
        <TabelaHead />
        <TabelaBody livros ={this.state.livros}/>
        <TabelaFoot qdelivros = {this.state.livros.length}/>
      </table>
    );
  }
}
  
export default App;
