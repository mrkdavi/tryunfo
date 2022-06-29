import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  removeSpace(words) {
    const wordList = words.split(' ');
    return wordList.reduce((a, v) => a + v);
  }

  render() {
    const { labelName, type, testId, value, callback, name } = this.props;
    const labelNameFormatted = (
      labelName.includes(' ') ? this.removeSpace(labelName) : labelName
    );

    return (
      <label htmlFor={ labelNameFormatted }>
        <span>
          { labelName }
        </span>
        <input
          id={ labelNameFormatted }
          value={ value }
          type={ type }
          name={ name }
          data-testid={ testId }
          onChange={ callback }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Input;
