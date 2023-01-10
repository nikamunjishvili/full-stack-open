
interface PropsTypeHello {
  name:string;
  age:number;
}

const Hello = ({name,age}: PropsTypeHello) => {
  const bornYear = () => {
    return new Date().getFullYear() - age
  }
    return (
      <div>
          <p>
            Hello {name},You are {age} years old
          </p>
          <p>So you were Probably born in {bornYear()}</p>
      </div>
    )
}

const App = () => {
  const name = "Nika";
  const age = 10;
  return(
    <>
      <h1>Greeting</h1>
      <Hello name="Nika" age={11 + 10} />
      <Hello name={name} age={age} />
    </>
  )
}
export default App;