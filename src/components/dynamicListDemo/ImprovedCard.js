import React from "react";

const improvedCard = props => {
  return (
    <div className="movies-list-item">
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
      {/* making use of ternary operator in conditional statement */}
      {/* {props.hasOscars ? (
        <p>Got the Oscar Award! </p>
      ) : (
        <p>Great movie but no Oscars! </p>
      )} */}
      {props.hasOscars && <p>Got the Oscar Award! </p>}
      {!props.hasOscars && <p>Great movie but no Oscars! </p>}
      <button onClick={props.clickToDelete}>Delete</button>
      <button onClick={props.clickToAdd}>Add</button>
    </div>
  );
};

export default improvedCard;
