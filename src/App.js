import React, { Component } from "react";
import User from "./components/User";
// import ReactPlayer from "react-player";
import "./App.css";
import { listItems, MoviesList } from "./components/ListDemo";
import DynamicMoviesList from './components/dynamicListDemo/DynamicMoviesList';

//PROPS CLASS LESSON EXAMPLE

// class App extends Component {
//   render () {
//     return (<div className='App'>
//        <User firstName="Harper"/>
//        <User firstName="Ana"/>

//        <ReactPlayer url="https://vimeo.com/channels/top/22439234" width={400} height={400}/>

//        <ReactPlayer
//           url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
//           playing
//           controls
//           volume="0,5"
//         />
//     </div>
//     );
//    }
//   }

//STATE CLASS LESSON EXAMPLE
class App extends Component {
  state = {
    userA: {
      firstName: "Harper",
      lastName: "Perez",
      avatarUrl:
        "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png"
    },
    userB: {
      firstName: "Michaela",
      lastName: "Baulovicova",
      avatarUrl:
        "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png",
      clickCount: 0,
      backColor: "yellow"
    }
  };

  colorMapper = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  clickHandler = () => {
    const newCount = this.state.clickCount + 1;

    if (newCount !== 5) {
      this.setState({
        clickCount: newCount,
        backColor: this.colorMapper()
      });
    } else {
      this.setState({
        clickCount: newCount,
        backColor: "yellow",
        userA: {
          firstName: "Jon",
          lastName: "Doe",
          avatarUrl:
            "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png"
        },
        userB: {
          firstName: "Susanne",
          lastName: "Smith",
          avatarUrl:
            "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"
        }
      });
    }
  };

  render() {
    return (
      <div className="App">
        <ul className="list-style">{listItems}</ul>
        <MoviesList />
        <ul>{listItems}</ul>
        <h1> Hello Ironhackers! </h1>
        <p>Count is: {this.state.clickCount}</p>
        <button onClick={this.clickHandler}>Click me</button>

        <User
          theColor={this.state.backColor}
          firstName={this.state.userA.firstName}
          lastName={this.state.userA.lastName}
          image={this.state.userA.avatarUrl}
        />
        <User
          firstName={this.state.userB.firstName}
          lastName={this.state.userB.lastName}
          image={this.state.userB.avatarUrl}
        />
        <DynamicMoviesList />
      </div>
    );
  }
}

export default App;
