import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  // constructor() {
  //   this.state = {

  //   }
  // }

  onInputChange() {

  }

  onSaveButtonClick() {

  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName=""
          cardDescription=""
          cardAttr1=""
          cardAttr2=""
          cardAttr3=""
          cardImage=""
          cardRare=""
          cardTrunfo=""
          hasTrunfo
          isSaveButtonDisabled
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName="1"
          cardDescription="2"
          cardAttr1="3"
          cardAttr2="4"
          cardAttr3="5"
          cardImage="6"
          cardRare="7"
          cardTrunfo
        />
      </div>
    );
  }
}

export default App;
