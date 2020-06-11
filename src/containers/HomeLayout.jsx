import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import { Layout } from 'antd';

const { Header, Content, Sider } = Layout;
import HeaderNav from '@/components/Header';
import LeftNav from '@/components/LeftNav';

export default class HomeLayout extends Component {
  render() {
    console.log(this.props.route);
    return (
      <Layout>
        <Header>
          <HeaderNav></HeaderNav>
        </Header>
        <Layout>
          <Sider>
            <LeftNav></LeftNav>
          </Sider>
          <Content>{renderRoutes(this.props.route.routes)}</Content>
        </Layout>
      </Layout>
    );
  }
}
