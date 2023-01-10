import { useState } from 'react'

interface PropsType {
  onClick:() => void;
  text:string;
}

const Button = ({onClick,text}: PropsType) => <button onClick={onClick}>{text}</button>

interface PropsTypeStatistic{
  good:number;
  neutral:number;
  bad:number;
}

interface PropsTypesLine {
  text:number | string;
  value:number | string;
}
const StatisticsLine = ({ text, value}:PropsTypesLine) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good,neutral,bad }:PropsTypeStatistic) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all
  const positive = `${(good / all) * 100}`
  return(
    all > 0 ? (
      <>
     <h2>Statistic</h2>
     <table>
      <tbody>
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="all" value={all} />
      <StatisticsLine text="average" value={average} />
      <StatisticsLine text="positive" value={positive} />
      </tbody>
     </table>
    </>
    ): (
      <p>No feedback given</p>
    )
  )
}
const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increment = (state: number,setState: (arg0: number) => any) => () => setState(state + 1);

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={increment(good,setGood)} text="good" />
      <Button onClick={increment(neutral,setNeutral)} text="neutral" />
      <Button onClick={increment(bad,setBad)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App