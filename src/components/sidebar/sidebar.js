import React, { Component } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import SendInvoiceForm from './sendInvoiceForm';
import imgDollarOutlined from '../../assets/create-invoice-coin@27.77777862548828x.png';
import imgGraph from '../../assets/create-invoice-graph-1@38.46154022216797x.png';
import imgSettings from '../../assets/create-invoice-shape@2x.png';
import './sidebar.scss';

const ReactSwal = withReactContent(Swal);

class SideBar extends Component {
  onCreateInvoice = () => {
    ReactSwal.fire({
      allowOutsideClick: true,
      allowEscapeKey: true,
      allowEnterKey: false,
      showCancelButton: false,
      showConfirmButton: false,
      position: 'bottom-end',
      html: (
        <SendInvoiceForm
          onClose={ReactSwal.clickCancel}
          onConfirm={ReactSwal.clickConfirm}
        />
      )
    })
      .then((result) => {
        if (result.value) {
          console.log('result.value: ', result.value);
        }
      });
  }

  render() {
    return (
      <div className="sidebar-wrapper">
        <div className="title-container">
          <img src={imgDollarOutlined} alt="dollar outlined" />
          <div className="ml-1">
            <p className="mb-0 main-title">Billing</p>
            <p className="mb-0 sub-title">Dashboard</p>
          </div>
        </div>
        <ul className="side-menu-list">
          <li><img src={imgGraph} alt="graph" />Overview</li>
          <li><img src={imgSettings} alt="settings" />Setting</li>
          <li className="button">
            <div className="add-button" onClick={this.onCreateInvoice}>
              <span className="mr-1">+</span>
              <span>New Invoice</span>
            </div>
          </li>
          <li className="price-label"><span><b>Sent</b></span><span>{this.props.invoiceData.sent}</span></li>
          <li className="price-label"><span>Cancelled</span><span>{this.props.invoiceData.cancelled}</span></li>
          <li className="price-label"><span>Scheduled</span><span>{this.props.invoiceData.scheduled}</span></li>
          <li className="price-label"><span>Draft</span><span>{this.props.invoiceData.draft}</span></li>
        </ul>
      </div>
    );
  }
}

export default SideBar;
