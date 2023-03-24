import React, { useContext } from 'react'
import award1 from '../assets/award1.jpg'
import { QuizContext } from '../Context/QuizHolder'
const Result = () => {
  const { correct, quizzes } = useContext(QuizContext);
  return (
    <div className='bg-red-100 p-5 rounded-md sm:w-96 w-80 mt-20 shadow-md m-auto'>
        <img src={award1} alt="" className='mx-auto w-48 rotate-45 mb-8 sm:w-56 sm:mb-11'/>
        <h1 className='font-medium text-3xl mb-3 '>Congrats!</h1>
        <h2 className='text-green-500 font-semibold text-4xl'>Your Score</h2>
        <h2 className='text-green-500 font-semibold text-4xl'>{correct}/{quizzes.length}</h2>
        <p className='text-xl font-medium mt-3'>Quiz completed successfully.</p>
        <p className='text-base font-medium text-sky-600'>Come back tomorrow</p>
    </div>
  )
}

export default Result