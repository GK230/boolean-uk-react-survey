import BestFeaturesCheckboxes from "./BestFeaturesCheckboxes";
import WorstFeaturesCheckboxes from "./WorstFeaturesCheckboxes";
import DuckConsistency from "./DuckConsistency";
import DuckColour from "./DuckColour";
import DuckLogo from "./DuckLogo";
import DuckTime from "./DuckTime";

import { useState } from "react";

const initialAnswerData = {
  username: "",
  logo: null,
  colour: null,
  consistency: null,
  timeSpent: [],
  review: "",
  bestFeatures: [],
  worstFeatures: [],
};

function Form() {
  const [answerData, setAnswerData] = useState(initialAnswerData);

  function handleSubmit(event) {
    event.preventDefault();

    addAnswer(answerData);
    setAnswerData(initialAnswerData);
  }

  function handleChange(event) {
    setAnswerData({
      ...answerData,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group">
        <h3>
          What would you say that are the best features of your rubber duck?
        </h3>
        {/* <!-- checkboxes go here --> */}
        <BestFeaturesCheckboxes handleChange={handleChange} />
      </div>
      <div className="form__group">
        <h3>What would you say that are the worst bits of your rubber duck?</h3>
        {/* <!-- Checkboxes go here --> */}
        <WorstFeaturesCheckboxes handleChange={handleChange} />
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck consistency?</h3>
        {/* <!-- radio buttons go here --> */}
        <DuckConsistency handleChange={handleChange} />
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        {/* <!-- Radio inputs go here --> */}
        <DuckColour handleChange={handleChange} />
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck logo?</h3>
        {/* <!-- radio inputs go here --> */}
        <DuckLogo handleChange={handleChange} />
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        {/* <!-- checkboxes go here --> */}
        <DuckTime handleChange={handleChange} />
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea name="review" cols="30" rows="10" onChange={handleChange}>
        </textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input type="text" name="username" value="" onChange={handleChange} />
      </label>
      <label>
        Leave us your email pretty please??
        <input type="email" name="email" value="" onChange={handleChange} />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}

export default Form;
