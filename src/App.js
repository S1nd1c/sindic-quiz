import { useState } from 'react';
import Quiz from './Quiz';
import './App.css'

function App() {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [correct, setCorrect] = useState(0);

  const isFinished = (corrects) => {
    setFinished(true);
    setStarted(false);
    setCorrect(corrects);
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      { !started ?
        <div className="flex flex-col justify-around items-center w-3/4 h-1/2 ">
          <h2 className="font-bold text-5xl">Quiz</h2>
          {finished &&
            <div className="h-screen w-screen flex justify-center items-center">
              <h2 className="font-bold text-5xl">{correct} answers!</h2>
            </div>
          }
          <button className="w-1/2 h-1/4 font-bold bg-gray-300 rounded" onClick={() => setStarted(true)}>Start</button>
        </div>
        :
        <>
          <Quiz finish={isFinished} />
        </>
      }
    </div>
  );
}

export default App;
