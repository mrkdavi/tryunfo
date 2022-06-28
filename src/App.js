import React from 'react';
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
      </div>
    );
  }
}

export default App;
