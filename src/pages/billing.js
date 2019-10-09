import React, { Component } from 'react';
import InvoiceStatus from '../components/billing/invoiceStatus';
import ConversionRate from '../components/billing/conversionRate';
import MonthlyChart from '../components/billing/monthlyChart';
import './billing.scss';

const monthlyData = [
  {
    name: 'MARCH', sent: 30, paid: 40, unpaid: 30,
  },
  { name: 'APRIL', sent: 40, paid: 60 },
  { name: 'MAY', sent: 13, paid: 87 },
  { name: 'JUNE', sent: 81, paid: 19 }
];

class BillingPage extends Component {
  render() {
    return (
      <div className="billing-page">
        <div className="statics-container">
          <div className="title-bar">
            <span className="main-title">Statistics</span>
            <div className="sub-title">All Time</div>
          </div>
          <div className="statics-content">
            <div className="content-section">
              <p className="section-title">INVOICES</p>
              <div className="status-box">
                <InvoiceStatus state="sent" currency="RM" amount={50} count={455} />
                <InvoiceStatus state="paid" currency="RM" amount={30} count={212} />
                <InvoiceStatus state="unpaid" currency="RM" amount={20} count={189} />
              </div>
            </div>
            <div className="content-section">
              <p className="section-title">CONVERSION</p>
              <div className="status-box">
                <ConversionRate
                  label="PAID WITHIN TIME"
                  rate={40}
                  color="rgb(88, 180, 91)"
                />
                <ConversionRate
                  label="PAID LATE"
                  rate={40}
                  color="rgb(244, 67, 54)"
                />
                <ConversionRate
                  label="UNPAID OVERDUE"
                  rate={20}
                  color="rgb(244, 67, 54)"
                />
              </div>
            </div>
            <div className="content-section">
              <div className="status-box">
                <MonthlyChart data={monthlyData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BillingPage;
