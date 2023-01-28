import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="name-input">
            Nome
            <input
              data-testid="name-input"
              type="text"
              name="nome"
            />
          </label>
          <br />
          <label htmlFor="description-input">
            Descrição
            <textarea
              data-testid="description-input"
              name="descricao"
            />
          </label>
          <br />
          <label htmlFor="attr1-input">
            Attr01
            <input
              data-testid="attr1-input"
              type="number"
              name="atributo1"
            />
          </label>
          <br />
          <label htmlFor="attr2-input">
            Attr02
            <input
              data-testid="attr2-input"
              type="number"
              name="atributo2"
            />
          </label>
          <br />
          <label htmlFor="attr3-input">
            Attr03
            <input
              data-testid="attr3-input"
              type="number"
              name="atributo3"
            />
          </label>
          <br />
          <label htmlFor="image-input">
            Imagem
            <input
              data-testid="image-input"
              type="text"
              name="imagem"
            />
          </label>
          <br />
          <label htmlFor="rare-input">
            Raridade
            <select
              data-testid="rare-input"
              name="raridade"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
          <br />
          <label htmlFor="trunfo-input">
            Super Trybe Trunfo
            <input
              data-testid="trunfo-input"
              type="checkbox"
              name="superTrybe"
            />
          </label>
          <button data-testid="save-button">
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
