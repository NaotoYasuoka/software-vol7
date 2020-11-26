import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar, Row, Col} from 'react-onsenui';
import {notification} from 'onsenui';

import "./style.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, value: 0, op: "" };
    this.onClickNum = this.onClickNum.bind(this);
    this.onClickAC = this.onClickAC.bind(this);
    this.onClickOp = this.onClickOp.bind(this);
    this.onClickEq = this.onClickEq.bind(this);
  }

  alertPopup() {
    notification.alert('This is an Onsen UI alert notification test.');
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className="center">電卓アプリ</div>
      </Toolbar>
    );
  }

  onClickNum(val) {
    var s = this.state;
    s.count = this.state.count * 10 + val;
    this.setState(s);
  }

  onClickAC() {
    this.setState({ count: 0, value: 0, op: "" });
  }

  onClickOp(op) {
    var s = this.state;
    if(s.op == "+"){
      s.value = s.value + s.count;
    }else if(s.op == "-"){
      s.value = s.value - s.count;
    }else if(s.op == "×"){
      s.value = s.value * s.count;
    }else if(s.op == "÷"){
      s.value = s.value / s.count;
    }else{
      s.value = s.count;
    }
    s.op = op;
    s.count = 0;
    this.setState(s);
  }

  onClickEq() {
    var s = this.state;
    if(s.op == "+"){
      s.value = s.value + s.count;
    }else if(s.op == "-"){
      s.value = s.value - s.count;
    }else if(s.op == "×"){
      s.value = s.value * s.count;
    }else if(s.op == "÷"){
      s.value = s.value / s.count;
    }else{
      s.value = s.count;
    }
    s.count = 0;
    this.setState(s);
  }



  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <Row>
          <Col className="box">{this.state.value}</Col>
        </Row>
        <Row>
          <Col className="box"></Col>
          <Col className="box"></Col>
          <Col className="box"></Col>
          <Col className="box"><div onClick={this.onClickAC}>AC</div></Col>
        </Row>
        <Row>
          <Col className="box"><div onClick={() => this.onClickNum(7)}>7</div></Col>
          <Col className="box"><div onClick={() => this.onClickNum(8)}>8</div></Col>
          <Col className="box"><div onClick={() => this.onClickNum(9)}>9</div></Col>
          <Col className="box"><div onClick={() => this.onClickOp("÷")}>÷</div></Col>
        </Row>
        <Row>
          <Col className="box"><div onClick={() => this.onClickNum(4)}>4</div></Col>
          <Col className="box"><div onClick={() => this.onClickNum(5)}>5</div></Col>
          <Col className="box"><div onClick={() => this.onClickNum(6)}>6</div></Col>
          <Col className="box"><div onClick={() => this.onClickOp("×")}>×</div></Col>
        </Row>
        <Row>
          <Col className="box"><div onClick={() => this.onClickNum(1)}>1</div></Col>
          <Col className="box"><div onClick={() => this.onClickNum(2)}>2</div></Col>
          <Col className="box"><div onClick={() => this.onClickNum(3)}>3</div></Col>
          <Col className="box"><div onClick={() => this.onClickOp("-")}>-</div></Col>
        </Row>
        <Row>
          <Col className="box"></Col>
          <Col className="box"><div onClick={() => this.onClickNum(0)}>0</div></Col>
          <Col className="box"><div onClick={this.onClickEq}>=</div></Col>
          <Col className="box"><div onClick={() => this.onClickOp("+")}>+</div></Col>
        </Row>
      </Page>
    );
  }
}