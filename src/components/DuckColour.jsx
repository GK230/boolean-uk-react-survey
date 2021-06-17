function DuckColour({ handleChange }) {
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
        />
        <label for="color1">1</label>
      </li>
      <li>
        <input
          id="color2"
          type="radio"
          name="color"
          value="2"
          onChange={handleChange}
        />
        <label for="color2">2</label>
      </li>
      <li>
        <input
          id="color3"
          type="radio"
          name="color"
          value="3"
          onChange={handleChange}
        />
        <label for="color3">3</label>
      </li>
      <li>
        <input
          id="color4"
          type="radio"
          name="color"
          value="4"
          onChange={handleChange}
        />
        <label for="color4">4</label>
      </li>
    </ul>
  );
}

export default DuckColour;
