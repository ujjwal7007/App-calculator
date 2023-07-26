import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const [previous, setPrevious] = useState("");
  const [operation, setOperation] = useState("");

  const handleClick = (e) => {
    const value = e.target.getAttribute("name");
    if (value === "." && result.includes(".")) return;
    setResult(result + value);
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const operationHandle = (e) => {
    if (result === "") return;
    if (previous !== "") {
      let value = compute();
      setPrevious(value);
    } else {
      setPrevious(result);
    }
    setResult("");
    setOperation(e.target.getAttribute("name"));
  };

  const calculate = () => {
    let value = compute();
    if (value === undefined || value === null) return;
    setResult(value);
    setPrevious("");
    setOperation("");
  };

  const compute = () => {
    let result;
    let previousNumber = parseFloat(previous);
    let resultNumber = parseFloat(result);
    if (isNaN(previousNumber) || isNaN(resultNumber)) return;
    switch (operation) {
      case "*":
        result = previousNumber * resultNumber;
        break;
      case "/":
        result = previousNumber / resultNumber;
        break;
      case "%":
        result = previousNumber % resultNumber;
        break;
      case "-":
        result = previousNumber - resultNumber;
        break;
      case "+":
        result = previousNumber + resultNumber;
        break;
      default:
        return;
    }
    return result;
  };

  return (
    <div className="container">
      <form className="left">
        <input type="text" value={result} />
        {result}
        <div>
          {previous} {operation}
          <input className="bottom" type="text" value={result} />
        </div>
      </form>
      <div className="right">
        <h1>Vertical Calculator</h1>
        <div>
          <button onClick={backspace} id="backspace">
            Clear
          </button>
          <button onClick={calculate} id="result">
            =
          </button>
        </div>
        <div className="keypad">
          <button name="*" onClick={operationHandle}>
            X
          </button>
          <button name="/" onClick={operationHandle}>
            /
          </button>
          <button name="%" onClick={operationHandle}>
            %
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="-" onClick={operationHandle}>
            -
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="+" onClick={operationHandle}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
