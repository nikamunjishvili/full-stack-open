interface PropsTypes {
    total:number;
  }
  const Total = (props: PropsTypes) => {
    return  <p>Number of exercises {props.total}</p>
  }

  export default Total;