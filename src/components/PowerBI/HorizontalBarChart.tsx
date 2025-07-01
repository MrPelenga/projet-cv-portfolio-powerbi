
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

interface HorizontalBarChartProps {
  data: Array<{
    name: string;
    value: number;
    [key: string]: any;
  }>;
  dataKey: string;
  color?: string;
  formatValue?: (value: number) => string;
  className?: string;
}

const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({
  data,
  dataKey,
  color = '#10B981',
  formatValue = (value) => value.toString(),
  className = ''
}) => {
  return (
    <div className={`w-full ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="horizontal"
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
          <XAxis 
            type="number" 
            stroke="#F9FAFB" 
            fontSize={12}
            tickFormatter={formatValue}
          />
          <YAxis 
            dataKey="name" 
            type="category" 
            stroke="#F9FAFB" 
            fontSize={11} 
            width={120}
          />
          <Bar 
            dataKey={dataKey} 
            fill={color}
            stroke="#059669"
            strokeWidth={1}
            radius={[0, 4, 4, 0]}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#374151',
              border: '1px solid #059669',
              borderRadius: '8px',
              color: '#F9FAFB'
            }}
            formatter={(value: any) => [formatValue(value), 'Valeur']}
            labelStyle={{ color: '#F9FAFB' }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HorizontalBarChart;
