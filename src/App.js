import './App.css';
import react, {useState} from 'react';
import MoleContainer from './MoleContainer'


function App() {
  let [score, setScore] = useState(0)

  const createMoleHill = () => {
    let hills = []
    for (let i = 0; i < 9; i++) {
      hills.push(
        <MoleContainer key={i} setScore={setScore} score={score} />
      )
    }
    return (
      <div>
        {hills}
      </div>
    )
  }

  return (
    <div className="App">
      <h1>React-a-Mole!</h1>
      {score}
      {createMoleHill()}
    </div>
  );
}

export default App;

/*import { useEffect } from 'react'
import moleImg from '../mole.png'

const Mole = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={moleImg} onClick={props.handleClick} />
        </div>
    )
}

export default Mole
*/
