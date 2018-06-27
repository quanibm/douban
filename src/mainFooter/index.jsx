import React, { Component } from 'react';

import './index.css';



export default class componentName extends Component {

  /**
   *
   *
   * @param {*} key
   * @memberof componentName
   */
  handleClick(category, key) {
    this.props.handleGetArg(category, key)
  }

  render() {
    const DEFAULT_VALUE = {
      mainSearch: '书名 、作者',
      mainBody: '电影名，演员名',
      mainFooter: '音乐名，歌手'
    }
    const classArg = this.props.classArg;
    if (classArg === 'book' || classArg === 'movie' || classArg === 'music') {
      return (
        <div className='mainFooter'>
          <span className="iconfont icon icon-tushu" onClick={this.handleClick.bind(this, 'book', DEFAULT_VALUE.mainSearch)}></span>
          <span className="iconfont icon icon-dianying" onClick={this.handleClick.bind(this, 'movie', DEFAULT_VALUE.mainBody)}></span>
          <span className="iconfont icon icon-yinlemusic214" onClick={this.handleClick.bind(this, 'music', DEFAULT_VALUE.mainFooter)}></span>
        </div>
      )
    } else {
      return(
        <div></div>
      )
    }

  }
};
