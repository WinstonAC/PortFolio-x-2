// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Card from "./Components/Card";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <nav>
          <ul>
            <li>
              <a href="mailto:wcampbell0880@gmail.com" target="_blank">
                Let's Chat
              </a>
            </li>
            <li></li>
          </ul>
        </nav>
        <div class="first-flex">
          <div class="developer-name">
            <h1>Billy Campbell</h1>
            <p>Full Stack Web Developer | Philanthropist |</p>
            <h2>About Me</h2>
            <p>
              Hi, my name is William Campbell, Billy, if we become friends! I’m
              an ambitious and driven Software Engineer based in NYC
              specializing in building various projects, cool websites, and
              anything that awakens the senses.{" "}
            </p>
            <div class="icons">
              <i class="fa fa-2x fa-github"></i>
              <i class="fa fa-2x fa-medium"></i>
              <i class="fa fa-2x fa-envelope-square"></i>
              <i class="fa fa-2x fa-twitter"></i>
              <i class="fa fa-2x fa-instagram"></i>
            </div>
        <div class="first-flex">
          <h2>My Work</h2>
          <Card></Card>
          <Card></Card>
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
