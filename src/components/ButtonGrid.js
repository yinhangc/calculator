import React from "react";

const ButtonGrid = ({ handleClick }) => {
  // prettier-ignore
  const valueArr = [
    "AC", "←", "%", " ÷ ", 
    "7", "8", "9", " × ",
    "4", "5", "6", " - ",
    "1", "2", "3", " + ",
    ".", "0", "Calculate!",
  ];

  return (
    <div className="btn-grid">
      {valueArr.map((value) => {
        return (
          <button onClick={handleClick} value={value} key={value}>
            {value}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonGrid;
