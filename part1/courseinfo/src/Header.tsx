interface PropsTypes {
    course:string;
  }
  
  const Header = (props: PropsTypes)=>{
    return(
      <h1>{props.course}</h1>
    )
  }

  export default Header;