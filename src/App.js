import './App.css'
import Result_component from './Result_component';
import { useState } from 'react';
const api = 'https://api.dictionaryapi.dev/api/v2/entries/en/';


function App() {

  const [typedValue, setTypedValue] = useState('')
  const [error, setError] = useState('');
  const [word, setWord] = useState('')
  const [partOfSpeech, setPartOfSpeech] = useState('')
  const [phonetic, setPhonetic] = useState('')
  const [definition, setDefinition] = useState('')
  const [example, setExample] = useState('')

  const callApi = async (inpWord) => {
    fetch(api+inpWord)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        setWord(inpWord)
        setPartOfSpeech(data[0]["meanings"][0]["partOfSpeech"])
        setPhonetic(data[0]["phonetic"])
        setDefinition(data[0]["meanings"][0]["definitions"][0]["definition"])
        setExample(data[0]["meanings"][0]["definitions"][0]["example"])
    })
    .catch(() => {
        console.log("word not found");
    });
  };

  return (
      <>
        <div className="flex-container">
            <h3 id="anamika_titile">Anamika's Dictionary</h3>
        </div>
        <div className="container">
            <div className="search-box">
                <input type="text" placeholder="Type the word here.." 
                    id="inp-word" value={typedValue} 
                    onChange={(event) => setTypedValue(event.target.value)}/>

                <button id="search-btn" onClick={() => {callApi(typedValue)}}>Search</button>
            </div>
            <Result_component 
              error={error} 
              word={word}
              partOfSpeech={partOfSpeech}
              phonetic={phonetic}
              definition={definition}
              example={example}
            />
        </div>
      </>
  );
}

export default App;
