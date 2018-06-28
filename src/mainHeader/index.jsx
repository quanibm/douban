import React, { Component } from 'react';

import './index.css';
import SearchBar from './SearchBar';
import BackBar from './BackBar';

export default class componentName extends Component {
    constructor() {
        super()
        this.state = {
            test: true
        }
    }

    render() {
        const classArg = this.props.parames.classArg;
        if (classArg === 'book' || classArg === 'music' || classArg === 'movie') {
            return (
                <SearchBar defaultValue={this.props.defaultValue} handleQueryArg={this.props.handleQueryArg} />
            )
        } else {
            return (
                <BackBar parames={this.props.parames} changeClass={this.props.changeClass} />
            )
        }

    }
};
