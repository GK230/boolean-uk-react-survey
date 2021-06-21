function WorstFeaturesCheckboxes({ handleChange, answerData }) {
  return (
    // <!-- This is a checkboxes group -->
    <ul>
      <li>
        <label>
          <input
            name="worstFeatures"
            type="checkbox"
            value="colour"
            onChange={handleChange}
            checked={answerData.worstFeatures.includes("color")}
          />
          It's yellow!
        </label>
      </li>
      <li>
        <label>
          <input
            name="worstFeatures"
            type="checkbox"
            value="sound"
            onChange={handleChange}
            checked={answerData.worstFeatures.includes("sound")}
          />
          It squeaks!
        </label>
      </li>
      <li>
        <label>
          <input
            name="worstFeatures"
            type="checkbox"
            value="logo"
            onChange={handleChange}
            checked={answerData.worstFeatures.includes("logo")}
          />
          It has a logo!
        </label>
      </li>
      <li>
        <label>
          <input
            name="worstFeatures"
            type="checkbox"
            value="size"
            onChange={handleChange}
            checked={answerData.worstFeatures.includes("size")}
          />
          Its big!
        </label>
      </li>
    </ul>
  );
}

export default WorstFeaturesCheckboxes;
