import "./App.css";
import Home from "./pages/Home";
import Question from "./pages/Question";
import { QuizContext } from "./Context/QuizHolder";
import { useContext } from "react";
import Result from "./pages/Result";

function App() {
  const { start, submit } = useContext(QuizContext);
  return (
    <div className="App">
      {submit === false ? 
        <>{start === true ? <Question /> : <Home />}</>
       : 
        <Result />
      }
    </div>
  );
}

export default App;
