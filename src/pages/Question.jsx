import React, { useContext, useEffect, useState } from "react";
import { QuizContext } from "../Context/QuizHolder";

const Question = () => {
  const [current, setCurrent] = useState(0);
  const { quizzes, correct, setCorrect, setSubmit } = useContext(QuizContext);
  const [ans, setAns] = useState("");

  const handleChange = () => {
    if (quizzes[current].correct === ans) {
      setCorrect(correct + 1);
    }
    setAns("");
    if (current + 1 === quizzes.length) {
      setSubmit(true);
    } else {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <p className="bg-green-400 px-7 py-1 rounded-full text-white font-semibold">
          0{current + 1}/0{quizzes.length}
        </p>
        <p className="bg-purple-400 px-7 py-1 rounded-full text-white font-semibold">
          {correct}
        </p>
      </div>
      <p className="text-left font-medium text-lg sm:text-xl mt-7">
        {quizzes[current].question}
      </p>

      <div className="flex flex-col gap-6 mt-72">
        <div
          onClick={() => setAns("a")}
          className="bg-white shadow-md rounded-sm py-3 px-5 flex items-center justify-between"
        >
          <div className="flex items-center gap-5">
            <p
              className={`cursor-pointer border-2 ${
                ans === "a" ? "bg-green-600 border-green-600 text-white" : ""
              } border-gray-500 px-2 rounded-md`}
            >
              A
            </p>
            <p className="text-base font-medium">{quizzes[current].a}</p>
          </div>
        </div>
        <div
          onClick={() => setAns("b")}
          className="bg-white shadow-md rounded-sm py-3 px-5 flex items-center justify-between"
        >
          <div className="flex items-center gap-5">
            <p
              className={`cursor-pointer border-2 ${
                ans === "b" ? "bg-green-600 border-green-600 text-white" : ""
              } border-gray-500 px-2 rounded-md`}
            >
              B
            </p>
            <p className="text-base font-medium">{quizzes[current].b}</p>
          </div>
        </div>
        <div
          onClick={() => setAns("c")}
          className="bg-white shadow-md rounded-sm py-3 px-5 flex items-center justify-between"
        >
          <div className="flex items-center gap-5">
            <p
              className={`cursor-pointer border-2 ${
                ans === "c" ? "bg-green-600 border-green-600 text-white" : ""
              } border-gray-500 px-2 rounded-md`}
            >
              C
            </p>
            <p className="text-base font-medium">{quizzes[current].c}</p>
          </div>
        </div>
        <div
          onClick={() => setAns("d")}
          className="bg-white shadow-md rounded-sm py-3 px-5 flex items-center justify-between"
        >
          <div className="flex items-center gap-5">
            <p
              className={`cursor-pointer border-2 ${
                ans === "d" ? "bg-green-600 border-green-600 text-white" : ""
              } border-gray-500 px-2 rounded-md`}
            >
              D
            </p>
            <p className="text-base font-medium">{quizzes[current].d}</p>
          </div>
        </div>
      </div>

      <button
        onClick={handleChange}
        className="bg-purple-500 px-7 mt-7 text-white font-bold py-2 rounded-full"
      >
        Next
      </button>
      <button
        onClick={() => setSubmit(true)}
        className="bg-purple-500 px-7 ml-5 mt-7 text-white font-bold py-2 rounded-full"
      >
        Submit
      </button>
    </div>
  );
};

export default Question;
