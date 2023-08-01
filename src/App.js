import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const [total, setTotal] = useState("");

  const reset = () => {
    setResult("");
  };

  const calculate = (e) => {
    setResult(result.concat(e.target.value));
  };

  function getCommaFormatted(expression) {
    const formattedExpression1 = expression.replace(
      /<span>([+*/%-])<\/span>?(\d{1,3}(?=(\d{3})+(?!\d)))/g,
      (operator, number) => {
        const formattedNumber = Number(number);
        return `${operator} ${formattedNumber}`;
      }
    );
    return formattedExpression1;
  }

  function formatExpression(expression) {
    const formattedExpression = expression
      .replace(/[-+*/%]/g, (operator) => `\n${operator}`)
      .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, (number) => Number(number));
    return formattedExpression;
  }

  const equal = () => {
    setResult(eval(result).toString());
    setTotal(formatExpression(result));
  };

  return (
    <div className="container">
      <form className="left">
        <div id="showCalc">
          {total.split("\n").map((line, index) => (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: getCommaFormatted(line) }}
            ></div>
          ))}
        </div>
        {/* <input
          type="text"
          value={total}
          onChange={(e) => setResult(e.target.value)}
        /> */}
        <input
          className="bottom"
          type="text"
          value={result}
          onChange={(e) => setResult(e.target.value)}
        />
      </form>
      <div className="right">
        <h1>Vertical Calculator</h1>
        <div>
          <button onClick={reset} id="backspace">
            Clear
          </button>
          <button onClick={equal} id="result">
            =
          </button>
        </div>
        <div className="keypad">
          <button value="*" onClick={calculate}>
            X
          </button>
          <button value="/" onClick={calculate}>
            /
          </button>
          <button value="%" onClick={calculate}>
            %
          </button>
          <button value="1" onClick={calculate}>
            1
          </button>
          <button value="2" onClick={calculate}>
            2
          </button>
          <button value="3" onClick={calculate}>
            3
          </button>
          <button value="4" onClick={calculate}>
            4
          </button>
          <button value="5" onClick={calculate}>
            5
          </button>
          <button value="6" onClick={calculate}>
            6
          </button>
          <button value="7" onClick={calculate}>
            7
          </button>
          <button value="8" onClick={calculate}>
            8
          </button>
          <button value="9" onClick={calculate}>
            9
          </button>
          <button value="-" onClick={calculate}>
            -
          </button>
          <button value="0" onClick={calculate}>
            0
          </button>
          <button value="+" onClick={calculate}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
