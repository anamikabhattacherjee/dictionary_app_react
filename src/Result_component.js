import './App.css'
import { useState } from 'react';

function Result_component(props) {

  return (
      <>
        <div className="result" id="result">
        <div className="word">
            <h3>{props.word}</h3>
            </div>
            <div className="details">
                <p>{props.partOfSpeech}</p>
                <p>{props.phonetic}</p>
            </div>
            <p className="word-meaning">{props.definition}</p>
            <p className="word-example">{props.example}</p>
        </div>
      </>
  );
}

export default Result_component;

