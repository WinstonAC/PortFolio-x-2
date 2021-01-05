// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Card1 from "./Components/Card1";
import Card2 from "./Components/Card1";
import Card3 from "./Components/Card1";
import Card4 from "./Components/Card1";
import { Icon } from "semantic-ui-react";

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
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="mailto:wcampbell0880@gmail.com"
                target="_blank"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="https://drive.google.com/file/d/13_Ao-RFhQCGdzIaELmW9hamdItyNhS5i/view?usp=sharing"
              >
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
              <Icon name="github" size="big" />
              <Icon name="react" size="big" />
              <Icon name="js" size="big" />
              <Icon name="css3" size="big" />
              <Icon name="html5" size="big" />
              <Icon name="database" size="big" />
              <Icon name="python" size="big" />
              <Icon name="php" size="big" />
            </div>
          </div>
        </div>

        <div className="first-flex">
          <h2>My Work</h2>
            <Card1></Card1>
            <Card2></Card2>
            <Card3></Card3>
            <Card4></Card4>
          </div>
        </div>
    );
  }
}

export default App;
