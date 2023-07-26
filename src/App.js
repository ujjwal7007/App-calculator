import React, { useState } from "react";
import "./App.css";

function App() {
  const [current, setCurrent] = useState("");
  const [previous, setPrevious] = useState("");
  const [operation, setOperation] = useState("");

  const handleClick = (e) => {
    const value = e.target.getAttribute("name");
    setCurrent(current + value);
  };

  const backspace = () => {
    setCurrent(current.slice(0, -1));
  };

  const operationHandle = (e) => {
    if (current === "") return;
    if (previous !== "") {
      let value = compute();
      setPrevious(value);
    } else {
      setPrevious(current);
    }
    setCurrent("");
    setOperation(e.target.getAttribute("name"));
  };

  const calculate = () => {
    let value = compute();
    if (value === undefined || value === null) return;
    setCurrent(value);
    setPrevious("");
    setOperation("");
  };

  const compute = () => {
    let result;
    let previousNumber = parseFloat(previous);
    let currentNumber = parseFloat(current);

    // console.log("previous:", previousNumber);
    // console.log("current:", currentNumber);
    // console.log("operation:", operation);

    switch (operation) {
      case "*":
        result = previousNumber * currentNumber;
        break;
      case "/":
        result = previousNumber / currentNumber;
        break;
      case "%":
        result = previousNumber % currentNumber;
        break;
      case "-":
        result = previousNumber - currentNumber;
        break;
      case "+":
        result = previousNumber + currentNumber;
        break;
      default:
        return;
    }
    // console.log("result:", result);
    return result;
  };

  return (
    <div className="container">
      <form className="left">
        <input type="text" value={`${previous} ${operation}`} />
        <div>
          <input className="bottom" type="text" value={current} />
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
