import logo from "./logo.svg";
import "./App.css";
import React,{Component} from 'react';
import CourseSales from "./CourseSales";

class App extends Component {

  render() {
    const courses = [
      {name: 'Complete iOS10 dev course', price:199},
      {name: 'Complete pentesting course', price:299},
      {name: 'Complete front-end dev course', price:180},
      {name: 'Bug Bounty and web app course', price:190},
    ]
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Course Purchase page</h2>
          </div>
         <CourseSales items={courses}/>
          
      </div>
    );
  }
}

export default App;
