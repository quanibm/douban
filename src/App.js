import React, { Component } from 'react';
import './App.css';




import MainHeader from './mainHeader';
import MainBody from './mainBody';
import MainFooter from './mainFooter';





class App extends Component {
  constructor() {
    super()
    this.state = {
      defaultValue: '书名 、 作者',
      classArg: 'book',
      count: 5,
      id: '',
      queryArg: '',
      reLoad: true
    }
  }
  handleQueryArg(category) {
    this.setState({
      queryArg: category
    })
  }
  handleGetArg(category, key) {
    this.setState({
      classArg: category,
      defaultValue: key
    })
  }

  changeId(id) {
    this.setState({
      id: id
    })
  }

  changeClass(_class) {//通过listpage传过来的class 判断  是否显示details
    switch (_class) {
      case 'book':
        this.setState({
          classArg: 'bookDetails'
        });
        break;
      case 'movie':
        this.setState({
          classArg: 'movieDetails'
        });
        break;
      case 'music':
        this.setState({
          classArg: 'musicDetails'
        })
        break;
      case 'bookDetails':
        this.setState({
          classArg: 'book'
        })
        break;
      case 'movieDetails':
        this.setState({
          classArg: 'movie'
        })
        break;
      case 'musicDetails':
        this.setState({
          classArg: 'music'
        })
        break;

    }
  }



  render() {
    const parames = this.state;
    console.log(this.state.queryArg)
    console.log(this.state.classArg)

    return (
      <div className="App">
        <MainHeader defaultValue={this.state.defaultValue} handleQueryArg={this.handleQueryArg.bind(this)} changeClass={this.changeClass.bind(this)} parames={parames} />
        <MainBody parames={parames} changeClass={this.changeClass.bind(this)} changeId={this.changeId.bind(this)} />
        <MainFooter handleGetArg={this.handleGetArg.bind(this)} classArg={this.state.classArg} />
      </div>
    );
  }
}

export default App;
