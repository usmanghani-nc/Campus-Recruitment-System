import React, { useState } from 'react';

import { Layout, Menu } from 'antd';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import { Link, useRouteMatch } from 'react-router-dom';

const SidePanel = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const { Sider, Content } = Layout;
  const { url } = useRouteMatch();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
        <Menu theme="dark" defaultSelectedKeys={['']} mode="inline">
          <Menu.Item key="1">
            <PieChartOutlined />
            <span>
              <Link to={`${url}/admincompany`}>Comapny Data</Link>
            </span>
          </Menu.Item>
          <Menu.Item key="2">
            <DesktopOutlined />
            <span>
              <Link to={`${url}/adminstudent`}>Student Data</Link>
            </span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}> {props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default SidePanel;
