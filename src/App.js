import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ParentHandsontable from './ParentHandsontable';
import ParentReactDataGrid from './ParentReactDataGrid';
import HandsontableRedux from './HandsontableRedux';
import HandsontableGlobalData from './HandsontableGlobalData';
import Stopwatch from './Stopwatch';
import HandsontableGlobal2dArrayData from "./HandsontableGlobal2dArrayData";
const Handsontable = require('handsontable');
console.log('Handsontable');
console.log(Handsontable);
window.Handsontable = Handsontable;


export default function BasicExample() {
  return (
    <Router>
      <section>
        <p style={{ textAlign: 'right' }}><a target="_blank" href="https://github.com/WranglHQ/handsontable_vs_reactdatagrid">https://github.com/WranglHQ/handsontable_vs_reactdatagrid</a></p>
        <p></p>
        <h2>compare handsontable with adazzle's react-data-grid with a ton of rows</h2>
        {/* <p>try 50,000 or 500,000 or 5,000,000 (handsontable will prob crash by 500,000)</p>
        <input
          style={{ width: '250px' }}
          type='text'
          placeholder="num rows (default 5,000)"
          id="numrowsinputid">
        </input>
        <p>change spreadsheet after changing number of rows to re-render the components:</p> */}
        <ul>
          {/* <li><Link to="/">Home</Link></li> */}
          <li><Link to="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🏠&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
          <li><Link to="/handsontable">Handsontable </Link> (rows as objects in component prop)</li>
          <li><Link to="/react-data-grid">AdazzleReactDataGrid </Link>  (rows as objects in component prop)</li>
          <p></p>
          <li><em><Link to="/handsontable-data-as-window-object">Handsontable </Link>  (rows as global objects array)</em></li>
          <li><em><Link to="/handsontable-data-as-2dArray-window-object">Handsontable </Link>  (rows as global 2d array)</em></li>
          {/* <p></p> */}
          {/* <Link to="/handsontable_redux"><span style={{ color: 'gray' }}>Handsontable redux</span></Link><span style={{ color: 'gray' }}> (from their <a target="_blank" href="https://handsontable.com/docs/7.4.2/frameworks-wrapper-for-react-redux-example.html">docs.</a> doesnt work.)</span> */}
          {/* <p></p> */}
        </ul>
      </section>
      <hr style={{ margin: 0 }} />
      <section>

        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/handsontable"><ParentHandsontable /></Route>
          <Route path="/react-data-grid"><ParentReactDataGrid /></Route>
          {/* <Route path="/handsontable_redux"><HandsontableRedux /></Route> */}
          <Route path="/handsontable-data-as-window-object"><HandsontableGlobalData /></Route>
          <Route path="/handsontable-data-as-2dArray-window-object"><HandsontableGlobal2dArrayData /></Route>
          <Route path="/stopwatch"><Stopwatch /></Route>
        </Switch>
      </section>

    </Router>
  );
}

function Home() {
  return (<div>
    <p>hi, welcome to handsontable-vs-reactdatagrid.onrender.com 👋</p>
    <p>i've been trying to decide bewteen react-data-grid and handsontable for a web project that
       might involve huge data sets, so i created this website to test the two</p>
    <p>these are my main observations:</p>
    <ul>
      <li>react-data-grid is almost 200 times faster than Handsontable for large datasets (1M+ rows)</li>
      <li>but react-data-grid has virtually no built-in features</li>
      <li>Handsontable has a significant memory leak.</li>
      <li>along with their listed <a href="https://handsontable.com/docs/7.4.2/tutorial-performance-tips.html">performance tips</a>, keeping manualColumnMove and columnSorting off will help too.</li>
    </ul>
    <p>You can see the memory leak yourself by going to one of the Handsontable pages,
    setting num rows to 100k or 1M, and then clicking "change first cell" a few times.
      you'll notice the clock time significantly increase.</p>
    <p></p>
    <p>Handsontable unfortunately seems unsuitable for large datasets, but excellent for small ones.</p>

  </div>);
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import MyHotComponent from './MyHotComponent';
// import MyRDGComponent from './MyRDGComponent';

// let asdf = 9;
// function App() {
//   return (
//     <>
//               <MyHotComponent ></MyHotComponent>
//               <br></br>
//               <MyRDGComponent ></MyRDGComponent>
//       {/* <button onClick={() => {
//         window.wd[1][1] += 1;
//         console.log(window.wd);
//         asdf ++;
//         console.log(asdf);

//         //TODO stupdi quest ...how to trigger comp update?

//       }}>change</button> */}
//     </>
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }

// export default App;
