import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import './fonts/whitefeather/Whitefeather.ttf';
import './fonts/junitta/Junitta-BW55G.otf';
import './fonts/moglan/Moglan_DEMO.ttf';
import './fonts/rouge-script/RougeScript-Regular.ttf';
import './fonts/vonique-64/Vonique64.ttf';
import './fonts/elsie-swash-caps/ElsieSwashCaps-Regular.ttf';
import './fonts/unique/Unique.ttf';
import './fonts/grotesk/Founders_Grotesque.ttf';

import App from "./App";

import {store,persistor} from './redux/store';
import ScrollToTop from "./helper/scrollToTop";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <Router>
      
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

