import React from 'react';
import PropTypes from 'prop-types';
import Button from '../form/Button';
import Score from '../Score';

const Result = ({score, scoreType}) => {

  return (
    <div className={"result-container"}>
      <p className={"result-header"}>Final Score</p>
      <Score
        score={score}
        scoreType={'finalScore'}
        icon={false}
      />
      <p><em>Great Job!</em></p>
      <p className={"cta"}>Push yourself even further as a citizen activist.</p>
      <Button
        btnText={"Learn More"}
        onClick={() => window.open("https://catalog.archives.gov/", "_blank")}
        btnRole={'afterTextWide'}
        btnColor={'blue'}
      />
      <div className={"game-options"}>
        <Button
          btnText={"Share Score"}
          onClick={() => alert("Coming Soon!")}
          btnRole={'afterTextNarrow'}
          btnColor={'white'}
        />
        <Button
          btnText={"Replay"}
          onClick={() => location.reload()}
          btnRole={'afterTextNarrow'}
          btnColor={'white'}
        />
      </div>
      <style jsx>{`
        .result-container {
          margin:12.5rem 0 0;
        }
        .result-container > div {
          float: none;
        }
        .result-header {
          font-size:1.6rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          line-height:1.2;
          font-weight:600;
          color:#132f50;
        }
        em {
          font-size:2.3rem;
          font-weight:600;
          color:#132f50;
          font-style:normal;
        }
        .cta {
          font-size:1.75rem;
          color:#132f50;
        }
        .game-options {
          display: flex;
          justify-content: space-between;
          margin-top: 10rem;
        }
      `}</style>
    </div>
  );
}


export default Result;
