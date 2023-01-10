import styled from "styled-components";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <Container>
      <H1>{course}</H1>
      <P>
        {part1} {exercises1}
      </P>
      <P>
        {part2} {exercises2}
      </P>
      <P>
        {part3} {exercises3}
      </P>
      <P>Number of exercises {exercises1 + exercises2 + exercises3}</P>
    </Container>
  );
};

export default App;

const P = styled.p``;
const Container = styled.div``;
const H1 = styled.h1``;
