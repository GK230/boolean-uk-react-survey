function BestFeaturesCheckboxes({ handleChange }) {
  return (
    <ul>
      <li>
        <label>
          <input
            name="bestFeatures"
            type="checkbox"
            value="colour"
            onChange={handleChange}
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
          />
          Its big!
        </label>
      </li>
    </ul>
  );
}

export default BestFeaturesCheckboxes;
