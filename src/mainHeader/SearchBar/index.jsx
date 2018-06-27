import React, { Component } from 'react';
import './index.css';
export default class componentName extends Component {
    handleClick() {
        this.props.handleQueryArg(this.input.value);
    }
    render() {
        return (
            <div className='mainSearch'>
                <span className='iconfont icon icon-search'></span>
                <input ref={input => this.input = input} type="text item" className='ipt' placeholder={this.props.defaultValue} />
                <button className='btn item' onClick={this.handleClick.bind(this)}>搜索</button>
            </div>
        )
    }
};
