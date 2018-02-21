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
        div {
          max-width:100%;
          padding:0 3rem;
        }
        img {
          width:40rem;
          max-width:100%;
          border-radius:0.3rem;
          box-shadow:0 0.2rem 0.3rem rgba(0,0,0,0.6);
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