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
        btnColor={'white'}
      />
      <div className={"game-options"}>
        <Button
          btnText={"Share Score"}
          onClick={() => alert("Coming Soon!")}
          btnRole={'afterTextNarrow'}
          btnColor={'blue'}
        />
        <Button
          btnText={"Replay"}
          onClick={() => location.reload()}
          btnRole={'afterTextNarrow'}
          btnColor={'blue'}
        />
      </div>
      <style jsx>{`
        .result-container {
          margin:10rem 2rem 0;
        }
        .result-container > div {
          float: none;
        }
        .result-header {
          font-size:1.6rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          line-height:1.2;
          font-weight:700;
          color:#132f50;
        }
        p {
          padding:0 5rem;
          font-size:2rem;
          margin-top:1rem;
          margin-bottom:0;
        }
        em {
          font-weight:700;
          color:#132f50;
          font-style:normal;
        }
        .cta {
          font-size:1.9rem;
          color:#132f50;
          margin-top:0.3rem;
          margin-bottom:4rem;
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
