/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './page/Homepage';
import LandingPage from './page/LandingPage';
import '@material-tailwind/react/tailwind.css';
import Icon from './image/HypeXWhite.png';
import background from './image/landingBG.png';

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/home">
              <Homepage />
            </Route>
            <Route path="/">
              <div style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'fixed',
                overflow: 'hidden',
                height: '100%',
                width: '100%',
              }}
              >
                <div style={{
                  overflow: 'auto',
                }}
                >
                  <span>
                    <img
                      src={Icon}
                      alt="icon"
                      style={{
                        position: 'absolute',
                        top: '0',
                        left: '2',
                        height: '8vh',
                        zIndex: '1000',
                      }}
                    />
                  </span>
                </div>
                <LandingPage />
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
