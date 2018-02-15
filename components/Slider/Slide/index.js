import React from 'react';
import PropTypes from 'prop-types';

import GuessForm from '../../form/GuessForm';

const Slide = ({ img, year, naId, title, onGuessYear, currentItem }) => {

  return (
    <div>
      <img src={img} alt={title} />
      <GuessForm
        year={year}
        naId={naId}
        currentItem={currentItem}
        onGuessYear={onGuessYear}
      />
      <style jsx>{`
        img {
          width: 400px;
        }
      `}</style>
    </div>
  );
}

Slide.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  naId: PropTypes.string.isRequired,
  onGuessYear: PropTypes.func.isRequired,
  currentItem: PropTypes.number.isRequired,
}

export default Slide;