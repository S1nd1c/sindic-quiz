import React from 'react'
import { useEffect, useState } from 'react'
import qa from './quiz.json'

function Quiz(props) {
  const [questions, setQuestion] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(false);
  const [correctOption, setOption] = useState('');

  useEffect(() => {
    let index =  Math.floor(Math.random() * (qa.questions.length - 0 + 1) + 0)
    setQuestion(qa["questions"][index]);
    setOption(qa["questions"][index]["correct"])
    console.log(questions)
  }, []);


  const changeQuestion = () => {
      setCurrent(current + 1);
      if(current >= 15) {
          props.finish(correct);
      } else {
        let index =  Math.floor(Math.random() * (qa.questions.length - 0 + 1) + 0)
        setQuestion(qa["questions"][index]);
        setOption(qa["questions"][index]["correct"])
        setSelected(false);
      }
  }

  const checkAnswer = (opt) => {
      if(selected) {
          return;
      }
      setSelected(true);
      if(opt == correctOption) {
          setCorrect(correct+1);
      }
  }
  
  return (
    <div className="w-screen h-screen bg-gray-100">
        {questions &&
        <div className='h-full'>
            <div className='flex justify-end p-5 font-bold text-2xl'> {current} / 15</div>
            <div className="h-3/4 flex flex-col justify-around">
                <div className='w-full h-1/4 flex justify-center items-center font-bold text-3xl p-2'>
                    {questions["question"]}
                </div>
                <div className='w-full flex flex-col items-center justify-around h-3/4 p-2'>
                    <div className={`w-full border-2 border-black rounded font-bold text-lg p-3 ${(selected && correctOption === 'a') ? 'bg-green-400' : ''}`} onClick={() => checkAnswer('a')}>{questions["answers"][0]}</div>
                    <div className={`w-full border-2 border-black rounded font-bold text-lg p-3 ${(selected && correctOption === 'b') ? 'bg-green-400' : ''}`} onClick={() => checkAnswer('b')}>{questions["answers"][1]}</div>
                    <div className={`w-full border-2 border-black rounded font-bold text-lg p-3 ${(selected && correctOption === 'c') ? 'bg-green-400' : ''}`} onClick={() => checkAnswer('c')}>{questions["answers"][2]}</div>
                    <div className={`w-full border-2 border-black rounded font-bold text-lg p-3 ${(selected && correctOption === 'd') ? 'bg-green-400' : ''}`} onClick={() => checkAnswer('d')}>{questions["answers"][3]}</div>
                </div>
            </div>
            <div className='w-full h-1/4 flex justify-center items-center font-bold text-3xl p-2'>
                {
                    selected &&
                    <button className={`w-1/4 h-1/4 rounded bg-gray-500`} onClick={changeQuestion}>Next</button>
                }
            </div>
        </div>
        }
    </div>
  )
}

export default Quiz