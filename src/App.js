import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Logo from './logo_tryunfo.png';
import './App.css';

class App extends React.Component {
  state = {
    nome: '',
    descricao: '',
    atributo1: 0,
    atributo2: 0,
    atributo3: 0,
    imagem: '',
    raridade: 'Normal',
    isSaveButtonDisabled: true,
    superTrybe: false,
    hasTrunfo: false,
    cards: [],
  };

  validateInput = () => {
    this.setState((state) => {
      const { nome,
        descricao,
        imagem,
        raridade,
        atributo1,
        atributo2,
        atributo3 } = state;

      const value = 210;
      const limite = 90;
      const newatributo1 = parseInt(atributo1, 10);
      const newAtributo2 = parseInt(atributo2, 10);
      const newAtributo3 = parseInt(atributo3, 10);
      const validNome = nome.length !== 0;
      const validDescricao = descricao.length !== 0;
      const validImagem = imagem.length !== 0;
      const validRaridade = raridade.length !== 0;
      const validSoma = (newatributo1 + newAtributo2 + newAtributo3) <= value;
      const validatributo1 = newatributo1 <= limite && newatributo1 >= 0;
      const validatributo2 = newAtributo2 <= limite && newAtributo2 >= 0;
      const validatributo3 = newAtributo3 <= limite && newAtributo3 >= 0;

      return {
        isSaveButtonDisabled: !(validNome
          && validDescricao
          && validImagem
          && validRaridade
          && validSoma
          && validatributo1
          && validatributo2
          && validatributo3),
      };
    });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validateInput);
  };

  onSaveButtonClick = () => {
    this.setState((state) => {
      const { nome,
        descricao,
        atributo1,
        atributo2,
        atributo3,
        imagem,
        raridade,
        superTrybe,
        cards } = state;
      const card = { nome,
        descricao,
        atributo1,
        atributo2,
        atributo3,
        imagem,
        raridade,
        superTrybe,
      };

      return {
        cards: [...cards, card],
        nome: '',
        descricao: '',
        atributo1: 0,
        atributo2: 0,
        atributo3: 0,
        imagem: '',
        raridade: 'Normal',
        superTrybe: false,
        isSaveButtonDisabled: true,
      };
    }, this.validTrunfo);
  };

  removeList = (idButton) => {
    const { cards } = this.state;
    const filter = cards.filter((_card, index) => index !== idButton);
    this.setState({
      cards: filter,
    }, this.validTrunfo);
  };

  validTrunfo = () => {
    const { cards } = this.state;
    const find = cards.find((card) => card.superTrybe === true);
    this.setState({
      hasTrunfo: find,
    });
  };

  render() {
    const { nome,
      descricao,
      atributo1,
      atributo2,
      atributo3,
      imagem,
      raridade,
      isSaveButtonDisabled,
      superTrybe,
      hasTrunfo,
      cards } = this.state;
    return (
      <div>
        <header>
          <img src={ Logo } alt="logo" />
        </header>
        <div className="addNewCard">
          <section>
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
              isSaveButtonDisabled={ isSaveButtonDisabled }
              cardTrunfo={ superTrybe }
              hasTrunfo={ hasTrunfo }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </section>
          <section className="preView">
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
          </section>
        </div>
        <section className="allCards">
          <h1>Todas as cartas</h1>
          <div className="div-cards">
            {
              cards.map((card, index) => (
                <div className="card-button" key={ card.nome }>
                  <div>
                    <Card
                      cardName={ card.nome }
                      cardDescription={ card.descricao }
                      cardAttr1={ card.atributo1 }
                      cardAttr2={ card.atributo2 }
                      cardAttr3={ card.atributo3 }
                      cardImage={ card.imagem }
                      cardRare={ card.raridade }
                      cardTrunfo={ card.superTrybe }
                    />
                  </div>
                  <button
                    data-testid="delete-button"
                    onClick={ () => this.removeList(index) }
                  >
                    Excluir
                  </button>
                </div>
              ))
            }
          </div>
        </section>
      </div>
    );
  }
}

export default App;
