import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import './home.less';
import sh from '@/assets/sh.jpg';

class Home extends Component {
  render() {
    const props = this.props;
    return (
      <div className="text">
        <Button type="primary">Primary</Button>
        <img src={sh} alt="" />
        <div>The ab11 {props.count}</div>
        <div>The text is {props.text}</div>
        <Button onClick={props.increment}>increment12</Button>
        <Button onClick={props.incrementAsync}>incrementAsync</Button>
        <Button onClick={props.addText}>a11 </Button>
      </div>
    );
  }
}
const mapState = state => ({
  count: state.count,
  text: state.text
});

// 解构赋值
// const mapDispatch = ({ count: { increment, incrementAsync } }) => ({
//   increment: () => increment(1),
//   incrementAsync: () => incrementAsync(1)
// });

const mapDispatch = dispatch => ({
  increment: () => dispatch.count.increment(1),
  incrementAsync: () => dispatch.count.incrementAsync(1),
  addText: () => dispatch.text.addText('加-')
});
export default connect(mapState, mapDispatch)(Home);
