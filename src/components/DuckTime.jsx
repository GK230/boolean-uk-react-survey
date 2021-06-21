function DuckTime({ handleChange, answerData }) {
  return (
    // <!-- This is a checkboxes group -->
    <ul>
      <li>
        <label>
          <input
            name="time"
            type="checkbox"
            value="swimming"
            onChange={handleChange}
            checked={answerData.timeSpent.includes("swimming")}
          />
          Swimming{" "}
        </label>
      </li>
      <li>
        <label>
          <input
            name="time"
            type="checkbox"
            value="bathing"
            onChange={handleChange}
            checked={answerData.timeSpent.includes("bathing")}
          />
          Bathing
        </label>
      </li>
      <li>
        <label>
          <input
            name="time"
            type="checkbox"
            value="chatting"
            onChange={handleChange}
            checked={answerData.timeSpent.includes("chatting")}
          />
          Chatting
        </label>
      </li>
      <li>
        <label>
          <input
            name="time"
            type="checkbox"
            value="noTime"
            onChange={handleChange}
            checked={answerData.timeSpent.includes("noTime")}
          />
          I don't like to spend time with it
        </label>
      </li>
    </ul>
  );
}

export default DuckTime;
