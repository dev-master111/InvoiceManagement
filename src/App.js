import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './components/Header/header';
import SideBar from './components/sidebar/sidebar';
import Footer from './components/footer';
import './App.scss';

const invoiceData = {
  sent: 25,
  cancelled: 1,
  scheduled: 2,
  draft: 3
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <div className="main-wraper">
            <SideBar invoiceData={invoiceData} />
            <div className="content-wrapper">
              {this.props.children}
            </div>
          </div>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default withRouter(App);
