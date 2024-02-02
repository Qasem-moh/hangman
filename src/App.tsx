
import words from '../wordList.json'
import {useState} from "react";
import Keyboard from "./Keyboard.tsx";
import HangmanWord from "./HangmanWord.tsx";
import HangmanDrawing from "./HangmanDrawing.tsx";

function App() {
    const [wordsToGuess, setWordsToGuess] = useState(()=>{
        return words[Math.floor(Math.random() * words.length)]
    })
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])
    console.log(wordsToGuess)
  return(
      <div   style={{
          maxWidth: "800px",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          margin: "0 auto",
          alignItems: "center",
      }}>
          <HangmanDrawing/>
          <HangmanWord/>
          <Keyboard/>
      </div>
  )
}

export default App
