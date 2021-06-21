import { useState } from "react";

import AnswersList from "./AnswersList";
import Form from "./Form";

export default function Main({ addAnswer }) {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setAnswersList] = useState([])

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* Use the AnswersList component here */}
        <AnswersList answersList={answersList}/>
      </section>
      <section className="main__form">
        <Form />
      </section>
    </main>
  );
}
