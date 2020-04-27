import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Landing from '../src/Components/Landing/Landing';
import RosterPage from '../src/Components/Roster/RosterPage';
import CoachesPage from '../src/Components/Coaches/CoachesPage';
import Home from '../src/Components/Home/Home';

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/roster' component={RosterPage} />
        <Route exact path='/coaches' component={CoachesPage} />
      </div>
    </Router>
  );
}

export default App;
