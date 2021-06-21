function DuckColour({ handleChange, answerData }) {
  return (
    // <!-- This is a radio buttons group -->
    <ul>
      <li>
        <input
          id="color1"
          type="radio"
          name="color"
          value="1"
          onChange={handleChange}
          checked={answerData.color === "1"}
        />
        <label htmlFor="color1">1</label>
      </li>
      <li>
        <input
          id="color2"
          type="radio"
          name="color"
          value="2"
          onChange={handleChange}
          checked={answerData.color === "2"}
        />
        <label htmlFor="color2">2</label>
      </li>
      <li>
        <input
          id="color3"
          type="radio"
          name="color"
          value="3"
          onChange={handleChange}
          checked={answerData.color === "3"}
        />
        <label htmlFor="color3">3</label>
      </li>
      <li>
        <input
          id="color4"
          type="radio"
          name="color"
          value="4"
          onChange={handleChange}
          checked={answerData.color === "4"}
        />
        <label htmlFor="color4">4</label>
      </li>
    </ul>
  );
}

export default DuckColour;
