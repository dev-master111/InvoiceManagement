import React, { Component } from 'react';
import './invoiceStatus.scss';

class InvoiceStatus extends Component {
  render() {
    const {
      currency,
      amount,
      count,
      state
    } = this.props;

    return (
      <div className={`invoice-status ${state}`}>
        <div className="amount-box">
          <div className="currency">{currency}</div>
          <div className="amount">{amount}K</div>
        </div>
        <div className="count-box">
          <div className="count">{count}</div>
          <div className="state">{state}</div>
        </div>
      </div>
    );
  }
}

export default InvoiceStatus;
