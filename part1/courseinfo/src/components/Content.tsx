import Part from "./Part";

interface PropsTypes {
    part1:string;
    part2:string;
    part3:string;
    exercises1:number;
    exercises2:number;
    exercises3:number;
  }
  
  const Content = (props: PropsTypes) => {
    return (
      <div>
        <Part part={props.part1} exercises={props.exercises1} />
        <Part part={props.part2} exercises={props.exercises2} />
        <Part part={props.part3} exercises={props.exercises3} />
      </div>
    );
  };

  export default Content