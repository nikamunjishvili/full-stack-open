import { useState } from "react";

interface PropsTypeApp {
  counter:number;
}

interface PropsDisplayTypes {
  counter:number;
}

interface PropsButtonTypes {
  onClick:() => void;
  text:string;
}
const Display = ({ counter }: PropsDisplayTypes) => <div>{counter}</div>  

const Button = ({ onClick, text }: PropsButtonTypes) => <button onClick={onClick}>{text}</button>

const App = (props: PropsTypeApp) => {
 const [counter,setCounter] = useState(0)
 const decreaseByOne = () => setCounter(counter - 1);
 const increaseByOne = () => setCounter(counter + 1);

 const setToZero = () => setCounter(0);
 
  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  )
}

export default App
