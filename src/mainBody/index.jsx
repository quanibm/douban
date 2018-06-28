import React, { Component } from 'react';
import PORT from '../api'

import './index.css';
import ListPage from './ListPage';

export default class componentName extends Component {
  constructor() {
    super()
    this.state = {
      datas: '',
    }
  }

  datas(datas) {
    this.setState({
      datas: datas
    })
  }



  render() {
    const parames = this.props.parames;
    switch (parames.classArg) {
      case 'book':
        console.log('​componentName -> render -> book', '重复调用是什么情况');

        var arr = [this.state.datas.books];
        PORT.callGet(parames.classArg, parames.count, parames.id, parames.queryArg, this.datas.bind(this))
        break;
      case 'movie':
        var arr = [this.state.datas.movies];
        PORT.callGet(parames.classArg, parames.count, parames.id, parames.queryArg, this.datas.bind(this))
        break;
      case 'music':
        var arr = [this.state.datas.musics];
        PORT.callGet(parames.classArg, parames.count, parames.id, parames.queryArg, this.datas.bind(this))
        break;
    }
    return (
      <div className='mainBody'>
        <ListPage listArr={arr} changeClass={this.props.changeClass} classArg={parames.classArg} changeId={this.props.changeId} />
      </div>
    )
  }

  componentDidMount() {
    // PORT.callGet(this.props.parames.classArg, this.state.count, this.state.id, this.props.parames.queryArg, this.setContents.bind(this))
    // const parames = this.props.parames;
    // console.log('我是mount方法')
    // PORT.callGet(parames.classArg, parames.count, parames.id, parames.queryArg, this.datas.bind(this))
  }

};
