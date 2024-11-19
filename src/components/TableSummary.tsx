import { Table, Tag, Select } from 'antd';
import { useState } from 'react';

const { Option } = Select;

const initialData = [
  {
    key: '1',
    fullName: 'John Doe',
    phoneNumber: '123-456-7890',
    houseNumber: '101',
    email: 'johndoe@example.com',
    status: 'paid',
  },
  {
    key: '2',
    fullName: 'Jane Smith',
    phoneNumber: '098-765-4321',
    houseNumber: '102',
    email: 'janesmith@example.com',
    status: 'pending',
  },
  {
    key: '3',
    fullName: 'Alice Johnson',
    phoneNumber: '555-555-5555',
    houseNumber: '103',
    email: 'alicej@example.com',
    status: 'paid',
  },
  {
    key: '4',
    fullName: 'Bob Brown',
    phoneNumber: '111-222-3333',
    houseNumber: '104',
    email: 'bobb@example.com',
    status: 'pending',
  },
];

export default function TableSummary() {
  const [data, setData] = useState(initialData);

  const handleStatusChange = (value: string, key: string) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.key === key ? { ...item, status: value } : item
      )
    );
  };

  const columns = [
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'House Number',
      dataIndex: 'houseNumber',
      key: 'houseNumber',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (_: any, record: any) => (
        <Select
          defaultValue={record.status}
          onChange={(value) => handleStatusChange(value, record.key)}
          style={{
            width: 120,
            backgroundColor: 'transparent',
          }}
          dropdownStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            border: '1px solid rgba(0, 0, 0, 0.2)',
          }}
        >
          <Option value="paid" style={{ color: 'green' }}>
            <Tag color="green">PAID</Tag>
          </Option>
          <Option value="pending" style={{ color: 'red' }}>
            <Tag color="volcano">PENDING</Tag>
          </Option>
        </Select>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} bordered />;
}
