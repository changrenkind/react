import React, { Component } from "react";
import { Button } from 'antd';

import "./home.less";
import sh from "@/assets/sh.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="text">
        homeIndex
        <Button type="primary">Primary</Button>
        <img src={sh} alt="" />
      </div>
    );
  }
}
