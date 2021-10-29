// import logo from './logo.svg';
import "./App.css";
import React from "react";
// import Card1 from "./Components/Card1";
// import Card2 from "./Components/Card2";
// import Card3 from "./Components/Card3";
// import Card4 from "./Components/Card4";
import { Icon } from "semantic-ui-react";
import DogFood from "./Components/DogFood";
import PhotoDjango from "./Components/PhotoDjango";
import Expanding_X_Cards_X_50501 from "./Components/ExpandingCards";

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
                href='https://drive.google.com/file/d/127hCF_3cBIL8Uf6abXKZHGSHMO_Sx8gI/view?usp=sharing'
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div class='first-flex'>
          <div class='developer-name'>
            <h1 className='name'>Billy Campbell</h1>
            <p className='name'>
              Full Stack Web Developer | Philanthropist | World Traveler{" "}
            </p>
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
          <h2 id='work'>Recent Projects </h2>
        </div>
        <div className='grid-container'>
        <div className="grid-child-dog">
        <DogFood />
        </div>
        <div className="grid-child-photo">
        <PhotoDjango />
        </div>
        <div className="grid-child-expanding">
        <Expanding_X_Cards_X_50501 />
        </div>
        </div>
      </div>
    );
  }
}

export default App;
