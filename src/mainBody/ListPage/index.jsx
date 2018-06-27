import React, { Component } from 'react';

export default class componentName extends Component {

  handleDetails(_class) {
    this.props.changeClass(_class)
    // switch (this.props.classArg){
    //   case 'book':

    // }
  }

  render() {
    console.log(this.props.listArr)
    const classArg = this.props.classArg;
    return (
      <ul>
        {this.props.classArg}
        {
          [1, 2, 3].map((item, index) => {
            return <li key={index} onClick={this.handleDetails.bind(this, classArg)} >{item}</li>
          })
        }
      </ul>
    )
  }
};
