import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
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
    } = this.props;
    return (
      <div className="card">
        <p id="name-card" data-testid="name-card">{`${cardName}`}</p>
        <img
          id="image-card"
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <p
          id="description-card"
          data-testid="description-card"
        >
          {`Descrição: ${cardDescription}`}
        </p>
        <div className="atributos">
          <p id="attr1-card" data-testid="attr1-card">{`Atributo 1: ${cardAttr1}`}</p>
          <p id="attr2-card" data-testid="attr2-card">{`Atributo 2: ${cardAttr2}`}</p>
          <p id="attr3-card" data-testid="attr3-card">{`Atributo 3: ${cardAttr3}`}</p>
          <p id="rare-card" data-testid="rare-card">{`Raridade: ${cardRare}`}</p>
          {
            cardTrunfo === true
          && <p id="trunfo-card" data-testid="trunfo-card">Super Trunfo</p>
          }
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
