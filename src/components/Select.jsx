import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  convertProp(prop) {
    return prop.split(';');
  }

  // convertSpace(str) {
  //   console.log(str);
  //   if (str.includes(' ')) {
  //     console.log('hi');
  //     const words = str.split(' ');
  //     const wordFormated = this.firstToUpperCase(words[1]);
  //     console.log(wordFormated);
  //     str = `${words[0]}${wordFormated}`;
  //   }
  //   return str;
  // }

  // firstToUpperCase(str) {
  //   const letter = str[0];
  //   const restWord = str.slice(1);
  //   return letter.toUpperCase() + restWord;
  // }

  render() {
    const { options, testId, callback, value } = this.props;
    const convertedOptions = this.convertProp(options);
    // console.log(convertedOptions);
    const optionsTags = convertedOptions.map(
      (op, i) => (
        <option key={ i } value={ op }>
          { op }
        </option>
      ),
    );
    console.log(optionsTags);
    return (
      <label htmlFor="rarity">
        <select value={ value } data-testid={ testId } onClick={ callback }>
          { optionsTags }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  options: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Select;
