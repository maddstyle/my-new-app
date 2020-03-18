import React from "react";
import Card from "./Card";

const numbers = [1, 2, 3, 4, 5, 6];

const movies = [
  { id: "AMLsriUkE", title: "Jurassic Park", director: "Steven Spielberg" },
  { id: "6dKZxwwmN", title: "Sharknado", director: "Anthony C. Ferrante" },
  { id: "z2uykusRE", title: "Titanic", director: "James Cameron" }
];

export const MoviesList = () => {
  return (
    <ul>
      {movies.map(item => (
        <Card key={item.id} title={item.title} director={item.director} />
      ))}
    </ul>
  );
};

//array of list item HTML elements that needs to be displayed
// export const listItems = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>, <li>5</li>];

export const listItems = numbers.map(value => <li>{value}</li>);








