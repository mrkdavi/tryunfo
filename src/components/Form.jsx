import React from 'react';
import Input from './Input';
import Select from './Select';

class Form extends React.Component {
  render() {
    return (
      <div>
        <Input labelName="nome" type="text" testId="name-input" />
        <Input labelName="descrição" type="textarea" testId="description-input" />
        <Input labelName="atributo 1" type="number" testId="attr1-input" />
        <Input labelName="atributo 2" type="number" testId="attr2-input" />
        <Input labelName="atributo 3" type="number" testId="attr3-input" />
        <Input labelName="imagem" type="text" testId="image-input" />
        <Select options="normal;raro;muito raro" />
        <Input labelName="super Trunfo" type="checkbox" testId="trunfo-input" />
        <input value="Salvar" type="button" data-testid="save-button" />
      </div>
    );
  }
}

export default Form;
