function BestFeaturesCheckboxes({ handleChange, answerData }) {
  return (
    <ul>
      <li>
        <label>
          <input
            name="bestFeatures"
            type="checkbox"
            value="colour"
            onChange={handleChange}
            checked={answerData.bestFeatures.includes("color")}
          />
          It's yellow!
        </label>
      </li>
      <li>
        <label>
          <input
            name="bestFeatures"
            type="checkbox"
            value="sound"
            onChange={handleChange}
            checked={answerData.bestFeatures.includes("sound")}
          />
          It squeaks!
        </label>
      </li>
      <li>
        <label>
          <input
            name="bestFeatures"
            type="checkbox"
            value="logo"
            onChange={handleChange}
            checked={answerData.bestFeatures.includes("logo")}
          />
          It has a logo!
        </label>
      </li>
      <li>
        <label>
          <input
            name="bestFeatures"
            type="checkbox"
            value="size"
            onChange={handleChange}
            checked={answerData.bestFeatures.includes("size")}
          />
          Its big!
        </label>
      </li>
    </ul>
  );
}

export default BestFeaturesCheckboxes;
