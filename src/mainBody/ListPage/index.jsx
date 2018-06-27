import React, { Component } from 'react';



import BookDetails from './BookDetails';
import MovieDetails from './MovieDetails';
import MusicDetails from './MusicDetails';
export default class componentName extends Component {

  handleDetails(_class) {
    this.props.changeClass(_class)
    // switch (this.props.classArg){
    //   case 'book':

    // }
  }

  render() {
    console.log(this.props.listArr)
    const listArr = this.props.listArr;
    const classArg = this.props.classArg;

    switch (classArg) {
      case 'book':
      case 'movie':
      case 'music':
        return (
          <ul>
            {
              [111,3,3].map((item, index) => {
                return <li key={index} onClick={this.handleDetails.bind(this, classArg)} >{item}</li>
              })
            }
          </ul>
        )
        break;
      case 'bookDetails':
        return (
          <div className='mainBody'>
            <BookDetails detailsId={1} />
          </div>
        )
        break;
      case 'movieDetails':
        return (
          <div className='mainBody'>
            <MovieDetails />
          </div>
        )
      case 'musicDetails':
        return (
          <div className='mainBody'>
            <MusicDetails />
          </div>
        )
    }
  }
};
