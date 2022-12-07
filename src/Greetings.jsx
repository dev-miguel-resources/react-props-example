// rafce
const Greetings = (props) => {
  console.log(props);
  //const { firstName, lastName, age } = props; 
  //const ageExample = props.age + 40 
  //props.age = 40

  return (
    <div>
      Hi {props.firstName} {props.lastName} you are {props.age}
      <br />
      {props.children}
    </div>
  );
};

export default Greetings;
