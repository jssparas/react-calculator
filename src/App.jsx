
import Display from './components/Display'
import Keypad from './components/Keypad'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';
import { useState } from 'react';

function App() {

  const [text, setText] = useState("");
  const operators = ['/', '*', '-', '+'];

  const handleClick = (buttonValue) => {
    console.log("clicked", buttonValue);
    if (buttonValue === 'C'){
      setText("")
    }
    else if (buttonValue === '=') {
      if (!(text.length === 0 || operators.includes(text.charAt(text.length - 1)))){
        setText(eval(text).toString());
      }
    }
    else {
      const newText = text + buttonValue;
      if (operators.includes(buttonValue)){
        if (!(text.length === 0 || operators.includes(text.charAt(text.length - 1)))){
          setText(newText);
        }
      }
      else{
        setText(newText);
      }
    }
  }

  return (
    <>
      <div className="container text-center">
        <h1>Here is a calculator!</h1>
      </div>
      <div className={`container text-center ${styles.calculator}`}>
        <Display text={text}></Display>
        <Keypad buttonClick={handleClick}></Keypad>
      </div>
    </>
  )
}

export default App
