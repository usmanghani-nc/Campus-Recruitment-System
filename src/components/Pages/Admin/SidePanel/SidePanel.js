import React, { useState } from 'react';

import { Layout, Menu } from 'antd';
import { UserOutlined, PieChartOutlined } from '@ant-design/icons';
import { Link, useRouteMatch } from 'react-router-dom';
import './sidebar.scss';

const SidePanel = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const { Sider, Content } = Layout;
  const { url } = useRouteMatch();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        className="sidebar"
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <Menu className="menu" theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" className="sidebar-menu">
            <PieChartOutlined />
            <span>
              <Link className="sideLinks" to={`${url}/adminhome`}>
                Admin Home
              </Link>
            </span>
          </Menu.Item>
          <Menu.Item key="2" className="sidebar-menu">
            <PieChartOutlined />
            <span>
              <Link className="sideLinks" to={`${url}/admincompany`}>
                Comapny Data
              </Link>
            </span>
          </Menu.Item>
          <Menu.Item key="3" className="sidebar-menu">
            <UserOutlined />
            <span>
              <Link className="sideLinks" to={`${url}/adminstudent`}>
                Student Data
              </Link>
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
