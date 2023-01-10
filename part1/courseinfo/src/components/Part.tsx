
interface PropsTypess {
    part:string;
    exercises:number;
   
  }
  const Part = (props:PropsTypess) => {
    return (
      <p>
      {props.part} {props.exercises}
    </p>
    )
  }
export default Part;  