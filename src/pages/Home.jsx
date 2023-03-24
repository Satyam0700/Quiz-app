import React, { useContext, useState } from "react";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import {
  FaRegCommentDots,
  FaRegBookmark,
  FaRegClock,
  FaRegFileAlt,
} from "react-icons/fa";
import { QuizContext } from "../Context/QuizHolder";

const description =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit liberoeum assumenda quasi sapiente Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit liberoeum assumenda quasi sapiente  ";

const Home = () => {
  const { setStart } = useContext(QuizContext);

  const [text, setText] = useState(description.slice(0, 98));
  const [readMore, setReadMore] = useState(false);

  return (
    <div>
      <Navbar />
      <Main />
      <h1 className="font-bold text-left text-2xl mt-8">
        The Daily MS Excel Quiz
      </h1>

      <div className="flex flex-col gap-3 mt-3">
        <p className="flex gap-3 items-center">
          <span>
            <FaRegCommentDots />
          </span>
          <span className="font-semibold">Leave a Comment</span>
        </p>
        <p className="flex gap-3 items-center">
          <span>
            <FaRegBookmark />
          </span>
          <span className="font-semibold">Save Quiz</span>
        </p>
        <p className="flex gap-3 items-center">
          <span>
            <FaRegCommentDots />
          </span>
          <span className="font-semibold">Challenge a Friend</span>
        </p>
      </div>

      <p className="text-left mt-4 font-medium">
        {text} {!readMore && '...'}
        <span
        className="text-green-500 font-medium cursor-pointer"
          onClick={() => {
            if (!readMore) {
              setText(description);
              setReadMore(true);
            } else {
              setText(description.slice(0, 98));
              setReadMore(false);
            }
          }}
        >
          {readMore ? " Show Less" : " Read More"}
        </span>
      </p>

      <h1 className="font-bold text-left text-xl mt-5">This Quiz Includes</h1>

      <div className="flex flex-col gap-3 mt-3">
        <p className="flex gap-3 items-center">
          <span>
            <FaRegFileAlt />
          </span>
          <span className="font-medium text-primary">
            50% Passing Percentage
          </span>
        </p>
        <p className="flex gap-3 items-center">
          <span>
            <FaRegBookmark />
          </span>
          <span className="font-medium text-primary">5 Questions</span>
        </p>
        <p className="flex gap-3 items-center">
          <span>
            <FaRegClock />
          </span>
          <span className="font-medium text-primary">10 mins</span>
        </p>
        <p className="flex gap-3 items-center">
          <span>
            <FaRegCommentDots />
          </span>
          <span className="font-medium text-primary">1 Attempt Daily</span>
        </p>
      </div>

      <button
        onClick={() => setStart(true)}
        className="bg-purple-600 px-7 mt-5 text-white font-bold py-2 rounded-full"
      >
        Take Quiz
      </button>
    </div>
  );
};

export default Home;
