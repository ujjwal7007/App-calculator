import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const [total, setTotal] = useState("");

  const back = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = (e) => {
    setResult(result.concat(e.target.name));
  };

  function getCommaFormatted(expression) {
    const formattedExpression1 = expression.replace(
      /<span>([+*/%-])<\/span>?(\d{1,3}(?=(\d{3})+(?!\d)))/g,
      (match, operator, number) => {
        const formattedNumber = Number(number).toLocaleString("en-IN");
        return `<span>${operator}</span>${formattedNumber}`;
      }
    );

    return formattedExpression1;
  }
  function formatExpression(expression) {
    const formattedExpression = expression
      .replace(/[-+*/%]/g, (operator) => `\n<span>${operator}</span>`)
      .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, (number) =>
        Number(number).toLocaleString("en-IN")
      );

    return formattedExpression;
  }
  const equal = () => {
    setResult(eval(result).toString());

    setTotal(formatExpression(result));
    console.log(total);
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
        {/* <input type="text" value={total} />  */}
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
          <button onClick={back} id="backspace">
            Clear
          </button>
          <button onClick={equal} id="result">
            =
          </button>
        </div>
        <div className="keypad">
          <button name="*" onClick={calculate}>
            X
          </button>
          <button name="/" onClick={calculate}>
            /
          </button>
          <button name="%" onClick={calculate}>
            %
          </button>
          <button name="1" onClick={calculate}>
            1
          </button>
          <button name="2" onClick={calculate}>
            2
          </button>
          <button name="3" onClick={calculate}>
            3
          </button>
          <button name="4" onClick={calculate}>
            4
          </button>
          <button name="5" onClick={calculate}>
            5
          </button>
          <button name="6" onClick={calculate}>
            6
          </button>
          <button name="7" onClick={calculate}>
            7
          </button>
          <button name="8" onClick={calculate}>
            8
          </button>
          <button name="9" onClick={calculate}>
            9{calculate}
          </button>
          <button name="-" onClick={calculate}>
            -
          </button>
          <button name="0" onClick={calculate}>
            0
          </button>
          <button name="+" onClick={calculate}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
