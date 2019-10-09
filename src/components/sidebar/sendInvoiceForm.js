import React, { Component } from 'react';
import imgUsers from '../../assets/create-invoice-fill-8@2x.png';
import './sendInvoiceForm.scss';

class SendInvoiceForm extends Component {
  render() {
    return (
      <div className="send-invoice-form">
        <div className="form-header">
          <h3>Send Invoice</h3>
          <span className="close-button" onClick={this.props.onClose}>X</span>
        </div>
        <div className="form-content">
          <div className="select-recipient form-row">
            <div><img src={imgUsers} className="mr-2" alt="users" />Select Recipient</div>
            <div className="add">+</div>
          </div>
          <div className="form-row">
            <input type="text" placeholder="Title..." />
          </div>
          <div className="dates form-row">
            <input type="date" placeholder="Title..." />
            <input type="date" placeholder="Title..." />
          </div>
          <div className="items form-row">
            <div className="row-title">Items</div>
            <div className="row-content">
              <div className="add-item">+ Add Item</div>
            </div>
          </div>
          <div className="form-row actions">
            <div className="synv-via">
              Send Via:
              <input type="checkbox" text="Sync" />Sync
              <input type="checkbox" text="Email" />Email
            </div>
            <button>SEND</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SendInvoiceForm;
