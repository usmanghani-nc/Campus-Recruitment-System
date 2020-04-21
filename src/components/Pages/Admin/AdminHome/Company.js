import React from 'react';

// IMPORTS..
import { Table, Tag } from 'antd';

// SCSS..

const Company = () => {
  const { Column, ColumnGroup } = Table;
  const data = [
    {
      key: '1',
      firstName: 'DADADADA',
      lastName: 'DADA',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      firstName: 'JiDDDm',
      lastName: 'GDDreen',
      age: 42,
      address: 'LondoDDn No. 1 Lake Park',
    },
    {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: '4FSFS No. 1 Lake Park',
    },
  ];

  return (
    <Table dataSource={data}>
      <ColumnGroup title="Name">
        <Column title="First Name" dataIndex="firstName" key="firstName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />
      </ColumnGroup>
      <Column title="Age" dataIndex="age" key="age" />
      <Column title="Address" dataIndex="address" key="address" />

      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <span>
            <a style={{ marginRight: 16 }}>Invite {record.lastName}</a>
            <a>Delete</a>
          </span>
        )}
      />
    </Table>
  );
};

export default Company;
