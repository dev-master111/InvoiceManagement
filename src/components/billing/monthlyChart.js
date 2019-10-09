import React, { Component } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

class MonthlyChart extends Component {
  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={this.props.data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sent" fill="rgba(240, 181, 58, 1.0)" />
        <Bar dataKey="paid" fill="rgba(76, 175, 120, 1.0)" />
        <Bar dataKey="unpaid" fill="rgba(240, 58, 58, 1.0)" />
      </BarChart>
    );
  }
}

export default MonthlyChart;
