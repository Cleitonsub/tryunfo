import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1, cardAttr2, cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled, onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form id="add-cards">
        <h2>Adicionar nova carta</h2>
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            data-testid="name-input"
            placeholder="Nome da carta"
            id="name-input"
            name="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="description-input">
          Descrição da carta
          <textarea
            id="description-input"
            cols="30"
            rows="10"
            data-testid="description-input"
            placeholder="Descrição da carta"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr1-input">
          Ataque
          <input
            type="number"
            data-testid="attr1-input"
            placeholder="Máximo de 90 pontos"
            min="0"
            max="90"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr2-input">
          Defesa
          <input
            type="number"
            data-testid="attr2-input"
            placeholder="Máximo de 90 pontos"
            min="0"
            max="90"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="attr3-input">
          Estrelas
          <input
            type="number"
            data-testid="attr3-input"
            placeholder="Máximo de 90 pontos"
            min="0"
            max="90"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="image-input">
          Imagem
          <input
            type="text"
            data-testid="image-input"
            placeholder="URL da imagem"
            name="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="rare-input">
          Raridade
          <select
            id="rare-input"
            data-testid="rare-input"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        {
        // Ponto de exclamação utilizado para reduzir o código.
        // Ideia tirada do site de Ricardo Reis.
        // https://ricardo-reis.medium.com/operadores-l%C3%B3gicos-logical-operators-b0687819d1a5
        }
        { !hasTrunfo ? (
          <label htmlFor="trunfo-input">
            Super Trunfo
            <input
              type="checkbox"
              data-testid="trunfo-input"
              id="trunfo-input"
              name="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>) : (<p>Você já tem um Super Trunfo em seu baralho</p>) }

        <button
          type="button"
          data-testid="save-button"
          id="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
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
  isSaveButtonDisabled: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.bool.isRequired,
};

export default Form;
