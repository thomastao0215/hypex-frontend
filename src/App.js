import Homepage from './page/Homepage';
import LandingPage from './page/LandingPage';
import "@material-tailwind/react/tailwind.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="bg-dark-blue-HypeX">
      <Router>
        <div className="App">
            <Switch>
              <Route path="/home">
                <Homepage />
              </Route>
              <Route path="/">
                <LandingPage />
              </Route>
            </Switch>
        </div>
      </Router>
    </div> 
  );
}

export default App;
