import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Sample data for demonstration
const defaultData = [
  { name: 'Page A', CareTakers: 40, Houses: 24, tenants: 24 },
  { name: 'Page B', CareTakers: 30, Houses: 13, tenants: 22 },
  { name: 'Page C', CareTakers: 20, Houses: 98, tenants: 22 },
  { name: 'Page D', CareTakers: 27, Houses: 39, tenants: 20 },
  { name: 'Page E', CareTakers: 18, Houses: 48, tenants: 21 },
  { name: 'Page F', CareTakers: 23, Houses: 38, tenants: 25 },
  { name: 'Page G', CareTakers: 34, Houses: 43, tenants: 21 },
];

export function MixedBarChart({ data = defaultData, height = 450 }) {
  return (
    <div className='mt-4 mb-4'>
      <div className='bg-white border shadow-md rounded-lg '>
        <ResponsiveContainer  height={height}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 10, left: 10, bottom: 5 }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" scale="band"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Houses"  fill="#f27522" />
        <Bar dataKey="tenants"  fill="#3498DB" />
        <Bar dataKey="CareTakers" fill="#4f008c" />
      </BarChart>
    </ResponsiveContainer>
      </div>
    </div>
  );
}
