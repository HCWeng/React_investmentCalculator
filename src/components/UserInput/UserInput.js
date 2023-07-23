import React from "react";

function UserInput() {
  const submidHandler = (event) => {
    //Default will reload the page
    event.preventDefault();
    //... do something
    console.log("SUBMIT");
  };

  const resetHandler = (event) => {
    //...
    console.log("RESET");
  };
  //create  2 parameter from 'current-savings' and 'event.target.value'
  const changeHandler = (input, value) => {
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
