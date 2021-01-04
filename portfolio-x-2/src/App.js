// import logo from './logo.svg';
import "./App.css";
import React from "react";


class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
     <div class="first-flex">
  <div class="developer-name">
    <h1>Billy Campbell</h1>
    <p>Ruby on Rails | WeChat Miniprograms | Project Management </p>
    <div class="icons">
    <i class="fa fa-2x fa-github"></i>
    <i class="fa fa-2x fa-medium"></i>
    <i class="fa fa-2x fa-envelope-square"></i>
    <i class="fa fa-2x fa-twitter"></i>
    <i class="fa fa-2x fa-instagram"></i>
  </div>

  </div>
  <a href="mailto:myemail">Let's Chat</a>
</div>

<div class="first-flex">
  <h2>My Work</h2>
  <div class="card">
    <h6>Title</h6>
    <p>Subtitle</p>
  </div>
  <div class="card">
    <h6>Title</h6>
    <p>Subtitle</p>  
  </div>
   <div class="card">
    <h6>Title</h6>
    <p>Subtitle</p>
  </div>
</div>

        
      
      </div>
    );
  }
}

export default App;
