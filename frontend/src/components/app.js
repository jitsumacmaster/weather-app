import React from 'react';
import { 
  Switch,
  Route,
} from 'react-router-dom';

import MainPage from './main/main_page';

import "../scss/style.scss";

// NOTE: Routes are also registered in package.json under 'reactSnapshot' to
// include/exclude from pre-rendering for static build output.

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;