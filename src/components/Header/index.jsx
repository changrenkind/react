import React, { Component } from 'react';

import logo from 'static/images/logo.svg';
import { Row, Col, Menu } from 'antd';

export default class HeaderNav extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={4}>
            <img src={logo} className="curson" alt="" />
          </Col>
          <Col>
            <Menu mode="horizontal">
              <Menu.Item key="mail">nihao</Menu.Item>
              <Menu.Item key="nihao">nihao</Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
    );
  }
}
