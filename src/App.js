import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    nome: '',
    descricao: '',
    atributo1: '',
    atributo2: '',
    atributo3: '',
    imagem: '',
    raridade: '',
    superTrybe: false,
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSaveButtonClick = () => {

  };

  render() {
    const { nome,
      descricao,
      atributo1,
      atributo2,
      atributo3,
      imagem,
      raridade,
      superTrybe } = this.state;
    return (
      <div>
        <h1>ADICIONE NOVA CARTA</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ nome }
          cardDescription={ descricao }
          cardAttr1={ atributo1 }
          cardAttr2={ atributo2 }
          cardAttr3={ atributo3 }
          cardImage={ imagem }
          cardRare={ raridade }
          cardTrunfo={ superTrybe }
          isSaveButtonDisabled="true"
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ nome }
          cardDescription={ descricao }
          cardAttr1={ atributo1 }
          cardAttr2={ atributo2 }
          cardAttr3={ atributo3 }
          cardImage={ imagem }
          cardRare={ raridade }
          cardTrunfo={ superTrybe }
        />
      </div>
    );
  }
}

export default App;
