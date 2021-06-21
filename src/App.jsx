import "./styles.css";

import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";

export default function App() {

  const [answers, setAnswers] = useState([])

  function addAnswer(answer) {
    setAnswers([...answers, answer])
  }


  return (
    // <> </> <- These are called React Fragments, and they allow us to return more than one top component
    <>
      <Header />
      <Main addAnswer={addAnswer}/>
    </>
  );
}
