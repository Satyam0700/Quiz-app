import { createContext, useState } from "react";

const QuizContext = createContext();

const quizzes = [
    {
        'question': 'If p is an integer pointer with a value 1000, then what will the value of p + 5 be?',
        'a': '1010',
        'b': '1004',
        'c': '1020',
        'd': '1005',
        'correct': 'c'
    },
    {
        'question': 'which of the following is markup language',
        'a': 'Java',
        'b': 'HTML',
        'c': 'JavaScript',
        'd': 'Python',
        'correct': 'b'
    },
    {
        'question': 'Which was the 1st non Test playing country to beat India in an international match?',
        'a': 'Canada',
        'b': 'Sri Lanka',
        'c': 'Zimbabwe',
        'd': 'East Africa',
        'correct': 'b'
    },
    {
        'question': 'What is part of a database that holds only one type of information?',
        'a': 'Field',
        'b': 'File',
        'c': 'Report',
        'd': 'Record',
        'correct': 'a'
    },
      {
        'question': 'In which decade was the first solid state integrated circuit demonstrated',
        'a': '1950s',
        'b': '1960s',
        'c': '1970s',
        'd': '1980s',
        'correct': 'a'
    }
]

export default function QuizHolder(props){
    const [start, setStart] = useState(false);
    const [correct, setCorrect] = useState(0);
    const [submit, setSubmit] = useState(false);
    return(
        <QuizContext.Provider value={{
            start, setStart, quizzes, correct, setCorrect, submit, setSubmit
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export { QuizContext };