import React, { Component } from 'react';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';
import './conversionRate.scss';

class ConversionRate extends Component {
  render() {
    const data = [
      { name: 'rate', value: this.props.rate },
      { name: 'diff', value: 100 - this.props.rate },
    ];

    const COLORS = [this.props.color, '#FFFFFF'];

    return (
      <div className="conversion-rate-box">
        <div className="pie-chart">
          <PieChart width={80} height={80} onMouseEnter={this.onPieEnter}>
            <Pie
              data={data}
              cx={40}
              cy={40}
              innerRadius={32}
              outerRadius={35}
              startAngle={450}
              endAngle={90}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >
              {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
              }
            </Pie>
          </PieChart>
          <div className="rate-label" style={{ color: this.props.color }}>{this.props.rate}%</div>
        </div>
        <p className="state-label">{this.props.label}</p>
      </div>
    );
  }
}

export default ConversionRate;
