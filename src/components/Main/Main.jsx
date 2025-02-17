import React from 'react';
import './Main.css';
import SplashCursor from '../Splashcursor/splashcursor';


function Main() {
  return (
    <div className="mainWrapper">

      <main>
        <SplashCursor/>

      <h1>
        Welcome! <span id="wave">👋</span>
      </h1>
      <h2>This is my <span id="namn">Portfolio</span>
      </h2>
      <div className="typewriter">
      <h2 id="twText">Regards, Daniel 😁</h2>
      </div>
      </main>

    </div>
  )
}

export default Main;