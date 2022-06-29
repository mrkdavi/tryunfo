import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      // hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onValidate = () => {
    const totalLimit = 210;
    const attLimit = 90;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;
    const sum = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3));

    // console.log(cardName, cardDescription, cardImage);
    // console.log(!cardName, !cardDescription, !cardImage);
    if (!cardName || !cardDescription || !cardImage) {
      return false;
    }
    if (!cardAttr1 || !cardAttr2 || !cardAttr3) {
      return false;
    }
    if (sum > totalLimit) {
      return false;
    }
    if (cardAttr1 > attLimit || cardAttr2 > attLimit || cardAttr3 > attLimit) {
      return false;
    }
    if (cardAttr1 < 0 || cardAttr2 < 0 || cardAttr3 < 0) {
      return false;
    }
    return true;
  }

  onButtonStatusHandler = () => {
    const status = !this.onValidate();
    this.setState(() => ({
      isSaveButtonDisabled: status,
    }));
    // const { isSaveButtonDisabled } = this.state;
    // console.log(isSaveButtonDisabled);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type.includes('checkbox') ? target.checked : target.value;
    this.setState(() => ({
      [name]: value,
    }), this.onButtonStatusHandler);
  }

  onSaveButtonClick() {

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
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
