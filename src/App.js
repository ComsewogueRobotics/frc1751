import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import HistoryPage from './pages/HistoryPage';
import ContributePage from './pages/ContributePage';
import RightSide from './pages/RightSide';
import LeftSide from './pages/LeftSide';
import Footer from './pages/Footer';
import {Route, NavLink, HashRouter} from "react-router-dom";
import './App.css';



const pages = [
  {
    name: "Home",
    page: HomePage,
    url: "/"
  },
  {
    name: "Contact",
    page: ContactPage,
    url: "/contact"
  },
  {
    name: "Contribute",
    page: ContributePage,
    url: "/contribute"
  },
  {
    name: "History",
    page: HistoryPage,
    url: "/history"
  }
];
class App extends Component {

  render() { return (
    <div className="App">
      <HashRouter>
        <div>
          <header className="App-header">
            <div>
              <h1 id="title">FRC Team 1751</h1>
              <div className="nav">
                {pages.map(page => {
                  return <li key={page.name} className="navlink">
                  <NavLink to={page.url} 
                  activeClassName="selected"
                  exact={page.url==="/"}>{page.name}</NavLink>
                  </li>
                })}
              </div>
            </div>
          </header>
          <div className="wrapper">
            {pages.map(page => {
              return <Route className="main-content" key={page.name} exact={page.url==="/"} path={page.url} component={page.page}/>
            })}
            <LeftSide />
            <RightSide />
            <Footer />
          </div>
        </div>
      </HashRouter>
    </div>
  );}
}

export default App;
