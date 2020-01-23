import React from 'react';
import HomeForm from './containers/home-form';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="container">
        <img src="https://cdn.dribbble.com/users/735944/screenshots/2715201/logo-dribbble.jpg" alt="Hire me!"></img>
      </div>
      </header>
      <div className="App-body">
        <div className="container l-row-stretch">
            <div className="col-md-6 col-sm-12 hero__image-wrapper">
              <div className="home__header-content">
                <h1 className="heading-1"> The Leading Candidates Search Component</h1>
                <p className="heading-3 home__intro l-margin-top-30"> Dan gathers the challange data, analyses it, and provides the solution, plus he hopes you appreciate his sense of humour.</p>
                <div className="l-margin-top-30"> 
                  <img src="/profile_img2.png" alt="me!"/>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-offset-1 col-md-6">
              <div className="form">
                <HomeForm />
              </div>
              <img className="img_bg" src="/fill-green-2.webp" alt="beans"/>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
