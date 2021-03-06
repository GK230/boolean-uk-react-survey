function DuckConsistency({ handleChange, answerData }) {
  return (
    // <!-- This is a radio buttons group -->
    <ul>
      <li>
        <input
          id="consistency1"
          type="radio"
          name="consistency"
          value="1"
          onChange={handleChange}
          checked={answerData.consistency === "1"}
        />
        <label htmlFor="consistency1">1</label>
      </li>
      <li>
        <input
          id="consistency2"
          type="radio"
          name="consistency"
          value="2"
          onChange={handleChange}
          checked={answerData.consistency === "2"}
        />
        <label htmlFor="consistency2">2</label>
      </li>
      <li>
        <input
          id="consistency3"
          type="radio"
          name="consistency"
          value="3"
          onChange={handleChange}
          checked={answerData.consistency === "3"}
        />
        <label htmlFor="consistency3">3</label>
      </li>
      <li>
        <input
          id="consistency4"
          type="radio"
          name="consistency"
          value="4"
          onChange={handleChange}
          checked={answerData.consistency === "4"}
        />
        <label htmlFor="consistency4">4</label>
      </li>
    </ul>
  );
}

export default DuckConsistency;
