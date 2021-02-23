// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Card1 from "./Components/Card1";
import Card2 from "./Components/Card2";
import Card3 from "./Components/Card3";
import Card4 from "./Components/Card4";
import { Icon } from "semantic-ui-react";
// import from 'semantic-ui-css/semantic.min.css’

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='app'>
        <nav className='nav'>
          <ul>
            <li>
              <a
                style={{ textDecoration: "none", color: "black" }}
                href='mailto:wcampbell0880@gmail.com'
                target='_blank'
              >
                Contact
              </a>
            </li>
            <li>
              <a
                style={{ textDecoration: "none", color: "black" }}
                href='https://drive.google.com/file/d/13_Ao-RFhQCGdzIaELmW9hamdItyNhS5i/view?usp=sharing'
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div class='first-flex'>
          <div class='developer-name'>
            <h1 className="name">Billy Campbell</h1>
            <p className="name">Full Stack Web Developer | Philanthropist | World Traveler </p>
            <div className='about'>
              <h2>About Me</h2>
              <p>
                Hi, my name is William Campbell, Billy, if we become friends!
                I’m an ambitious and driven Software Engineer based in NYC
                specializing in building various projects, cool websites, and
                anything that awakens the senses.{" "}
              </p>
            </div>
            <div class='icons'>
              <Icon name='github' size='big' />
              <Icon name='react' size='big' />
              <Icon name='js' size='big' />
              <Icon name='css3' size='big' />
              <Icon name='html5' size='big' />
              <Icon name='database' size='big' />
              <Icon name='python' size='big' />
              <Icon name='php' size='big' />
            </div>
          </div>
        </div>
        <div class='about'>
          <h2 id="work">My Work </h2>
        </div>
        <div className='card-box'>
          <div className='cards-listing'>
            <Card1 className="cardy"></Card1>
            <Card2 className="cardy"></Card2>
            <Card3 className="cardy"></Card3>
            <Card4 className="cardy"></Card4>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
