import React from 'react';

// IMPORTS..
import { Table, Tag } from 'antd';

// SCSS..

const Student = () => {
  const { Column, ColumnGroup } = Table;
  const data = [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
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

export default Student;
