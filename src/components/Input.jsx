import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  removeSpace(words) {
    const wordList = words.split(' ');
    return wordList.reduce((a, v) => a + v);
  }

  render() {
    const { labelName, type, testId } = this.props;
    const labelNameFormatted = (
      labelName.includes(' ') ? this.removeSpace(labelName) : labelName
    );

    return (
      <label htmlFor={ labelNameFormatted }>
        <span>
          { labelName }
          :
        </span>
        <input
          type={ type }
          name={ labelNameFormatted }
          data-testid={ testId }
        />
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
};

export default Input;
