import React, { useState } from "react";
import ButtonGrid from "./ButtonGrid";
import { round, evaluate } from "mathjs";
import "./style.css";

const App = () => {
  const [alertMsg, setAlertMsg] = useState("");
  const [prevInput, setPrevInput] = useState("");
  const [currInput, setCurrInput] = useState(" ");

  const clearInput = () => {
    setPrevInput("");
    setCurrInput(" ");
    setAlertMsg("");
  };

  const backspace = () => {
    setAlertMsg('');
    let inputArr = [...currInput];
    if (inputArr[inputArr.length - 1] === " ") {
      setCurrInput(currInput.slice(0, -3));
    } else {
      setCurrInput(currInput.slice(0, -1));
    }
  };

  const handlePercentage = () => {
    let inputArr = [...currInput];
    if (!Number(inputArr[inputArr.length - 1]) && inputArr[inputArr.length - 1] !== "0") {
      setAlertMsg('Invalid Input!');
      return;
    }
    for (let i = inputArr.length - 1; i >= 0; i--) {
      if (inputArr[i] === " ") {
        const value = (inputArr.splice(i + 1).join("")) / 100;
        setCurrInput(inputArr.join("") + value.toString());
        break;
      }
    }
  };

  const handleCalculate = () => {
    try {
      const result = round(evaluate(currInput.replace('×', '*').replace('÷', '/')), 2);
      setPrevInput(currInput)
      setCurrInput(" " + result.toString());
    } catch {
      setAlertMsg('Invalid Input!')
    }
  };

  const handleClick = (e) => {
    switch (e.target.value) {
      case "AC":
        clearInput();
        break;
      case "←":
        backspace();
        break;
      case "%":
        handlePercentage();
        break;
      case "Calculate!":
        handleCalculate();
        break;
      default:
        if (currInput.length > 31) {
          setAlertMsg('Input is too long!')
          return;
        };
        setAlertMsg('');
        setCurrInput(currInput + e.target.value);
    }
  };

  const alertIsTrue = alertMsg.length > 0;

  return (
    <div className="container">
      <h1>Simple Calculator 🧮</h1>
      <div className="calculator">
        <h2 className="display">
          <span className={`display-previous ${alertIsTrue ? "alert-msg" : ""}`}>
            {alertIsTrue ? alertMsg : prevInput}
          </span>
          <span className="display-current">{currInput}</span>
        </h2>
        <ButtonGrid handleClick={handleClick} />
      </div>
    </div>
  );
};

export default App;


