// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Card from "./Components/Card";
import { Icon } from 'semantic-ui-react'

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <nav className="nav">
          <ul>
            <li>
              <a style={{ textDecoration: "none", color: "black" }} href="mailto:wcampbell0880@gmail.com" target="_blank">
                Contact
              </a>
            </li>
            <li>
              <a style={{ textDecoration: "none", color: "black" }} href="https://drive.google.com/file/d/13_Ao-RFhQCGdzIaELmW9hamdItyNhS5i/view?usp=sharing">
                Resume
              </a>
            </li>
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
            <Icon name='github' size='small' />
              <i class="fa fa-2x fa-medium"></i>
              <i class="fa fa-2x fa-envelope-square"></i>
              <i class="fa fa-2x fa-twitter"></i>
              <i class="fa fa-2x fa-instagram"></i>
            </div>
          </div>
        </div>

        <div className="first-flex">
          <h2>My Work</h2>
            <Card></Card>
            {/* <Card></Card> */}
            {/* <Card></Card>
            <Card></Card> */}
            </div>
      </div>
    );
  }
}

export default App;
