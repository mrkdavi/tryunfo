import PropTypes from 'prop-types';
import React from 'react';
import Input from './Input';
import Select from './Select';

class Form extends React.Component {
  verifyHasTrunfo = (hasTrunfo, cardTrunfo, onInputChange) => {
    if (hasTrunfo) {
      return <p>Você já tem um Super Trunfo em seu baralho</p>;
    }
    return (
      <label htmlFor="checkbox-input">
        <span>super Trunfo</span>
        <input
          id="checkbox-input"
          type="checkbox"
          data-testid="trunfo-input"
          name="cardTrunfo"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>
    );
  }

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
      onSaveButtonClick,
      onInputChange,
    } = this.props;
    return (
      <form>
        <Input
          labelName="nome"
          type="text"
          testId="name-input"
          value={ cardName }
          name="cardName"
          callback={ onInputChange }
        />
        <Input
          labelName="descrição"
          type="textarea"
          testId="description-input"
          value={ cardDescription }
          name="cardDescription"
          callback={ onInputChange }
        />
        <Input
          labelName="atributo 1"
          type="number"
          testId="attr1-input"
          value={ cardAttr1 }
          name="cardAttr1"
          callback={ onInputChange }
        />
        <Input
          labelName="atributo 2"
          type="number"
          testId="attr2-input"
          value={ cardAttr2 }
          name="cardAttr2"
          callback={ onInputChange }
        />
        <Input
          labelName="atributo 3"
          type="number"
          testId="attr3-input"
          value={ cardAttr3 }
          name="cardAttr3"
          callback={ onInputChange }
        />
        <Input
          labelName="imagem"
          type="text"
          testId="image-input"
          value={ cardImage }
          name="cardImage"
          callback={ onInputChange }
        />
        <Select
          options="normal;raro;muito raro"
          testId="rare-input"
          value={ cardRare }
          name="cardRare"
          callback={ onInputChange }
        />
        { this.verifyHasTrunfo(hasTrunfo, cardTrunfo, onInputChange) }
        <input
          value="Salvar"
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        />
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onSaveButtonClick: PropTypes.func,
  onInputChange: PropTypes.func,
}.required;

export default Form;
