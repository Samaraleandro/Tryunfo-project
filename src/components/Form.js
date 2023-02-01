import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="name-input">
            Nome
            <input
              data-testid="name-input"
              id="name-input"
              type="text"
              name="nome"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="description-input">
            Descrição
            <textarea
              data-testid="description-input"
              id="description-input"
              name="descricao"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="attr1-input">
            Attr01
            <input
              data-testid="attr1-input"
              id="attr1-input"
              type="number"
              name="atributo1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="attr2-input">
            Attr02
            <input
              data-testid="attr2-input"
              id="attr2-input"
              type="number"
              name="atributo2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="attr3-input">
            Attr03
            <input
              data-testid="attr3-input"
              id="attr3-input"
              type="number"
              name="atributo3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="image-input">
            Imagem
            <input
              data-testid="image-input"
              id="image-input"
              type="text"
              name="imagem"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="rare-input">
            Raridade
            <select
              data-testid="rare-input"
              id="rare-input"
              name="raridade"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
          <br />
          { hasTrunfo === true ? (
            <label htmlFor="trunfo-input">
              Super Trybe Trunfo
              <input
                data-testid="trunfo-input"
                id="trunfo-input"
                type="checkbox"
                checked={ cardTrunfo }
                onChange={ onInputChange }
                name="superTrybe"
              />
            </label>) : <p>Você já tem um Super Trunfo em seu baralho</p>}
          <button
            data-testid="save-button"
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
