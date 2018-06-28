import React, { Component } from 'react';

import './index.css';

export default class componentName extends Component {
  constructor(){
    super()
    this.state = {
      title: ''
    }
  }
  
  changeClass(_class){
    this.props.changeClass(_class)
  }

  render() {
    const classArg = this.props.parames.classArg;
    switch (classArg) {
      case 'bookDetails':
        return (
          <div className='backBar'>
            <span onClick={this.changeClass.bind(this, 'bookDetails')}>{'< 图书'}</span>
            <h1>{this.state.title + '我是title'}</h1>
          </div>
        )
        break;
      case 'movieDetails':
        return (
          <div className='backBar'>
            <span onClick={this.changeClass.bind(this, 'movieDetails')}>{'< 电影'}</span>
            <h1>{this.state.title + '我是title'}</h1>
          </div>
        )
        break;
      case 'musicDetails':
        return (
          <div className='backBar'>
            <span onClick={this.changeClass.bind(this, 'musicDetails')}>{'< 音乐'}</span>
            <h1>{this.state.title + '我是title'}</h1>
          </div>
        )
        break;
    }
  }

  componentDidMount() {
    console.log(this.props.parames)
  }
};
