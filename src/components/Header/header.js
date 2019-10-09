import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import imgBuilding from '../../assets/create-invoice-oval@17.85714340209961x.png';
import imgMainLogo from '../../assets/create-invoice-sync@2x.png';
import imgHome from '../../assets/create-invoice-icon--home-ol@20.83333396911621x.png';
import imgCalender from '../../assets/create-invoice-shape-2@2x.png';
import imgBook from '../../assets/create-invoice-icon--academic-o@23.809524536132812x.png';
import imgDollar from '../../assets/create-invoice-icon--bill-o@23.809524536132812x.png';
import imgBell from '../../assets/create-invoice-uea3c@31.25x.png';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <div className="main-header">
        <img className="main-logo" src={imgMainLogo} alt="logo" />
        <div className="header-content">
          <div className="page-links">
            <ul className="links">
              <li><Link to="/sis"><img src={imgBuilding} alt="building" className="mr-1" />SIS</Link></li>
              <li><Link to="/members">Members</Link></li>
              <li><Link to="/groups">Groups</Link></li>
            </ul>
          </div>
          <div className="menu-items">
            <ul className="links">
              <li><Link to="/"><img src={imgHome} alt="home" /></Link></li>
              <li><Link to="/"><img src={imgCalender} alt="calender" /></Link></li>
              <li><Link to="/"><img src={imgBook} alt="book" /></Link></li>
              <li><Link to="/"><img src={imgDollar} alt="dollar" /></Link></li>
              <li className="ml-3"><Link to="/"><img src={imgBell} alt="bell" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
