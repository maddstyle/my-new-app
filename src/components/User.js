import React from "react";

//PROPS LESSON
// function User(props) {
//   return <h2>Hello, {props.firstName}!</h2>;
// }

//STATE LESSON
function User(props) {
  return (
    <div>
      <h2 style={{ backgroundColor: props.theColor }}>
        Hello, {props.firstName} {props.lastName}!
      </h2>
      <img src={props.image} width="370" height="300" />
    </div>
  );
}
export default User;