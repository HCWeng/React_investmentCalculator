import React, { useState } from "react";
//預設值
const initialUserInput = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

function UserInput() {
  //every input need useput, usehook
  const [userInput, setUserInput] = useState(initialUserInput);

  const submidHandler = (event) => {
    //Default will reload the page
    event.preventDefault();
    //... do something
    console.log("SUBMIT");
  };

  const resetHandler = (event) => {
    setUserInput(initialUserInput);
  };
  //create  2 parameter from 'current-savings' and 'event.target.value'
  const changeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value, //user input new value
      };
    });
    console.log(input, value);
  };

  return (
    <div>
      <form onSubmit={submidHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              onChange={(event) =>
                changeHandler("current-savings", event.target.value)
              }
              value={userInput["current-savings"]}
              type="number"
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              onChange={(event) =>
                changeHandler("yearly-contribution", event.target.value)
              }
              value={userInput["yearly-contribution"]}
              type="number"
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              onChange={(event) =>
                changeHandler("expected-return", event.target.value)
              }
              value={userInput["expected-return"]}
              type="number"
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              onChange={(event) =>
                changeHandler("duration", event.target.value)
              }
              //設定預設值
              value={userInput.duration}
              type="number"
              id="duration"
            />
          </p>
        </div>
        <p className="actions">
          <button onClick={resetHandler} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
}

export default UserInput;
