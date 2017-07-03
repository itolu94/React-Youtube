'use strict';

import React, { Component } from 'react';
// import ReactDOM from 'react-dom';  



class SearchBar extends Component {
    // how to init a state
    // ran every time we initialize a class
    // reservered for doing setup [initializing]
    constructor(props) {
        super(props);
        // this will become the users input
        this.state = { term: '' }
    }

    render() {
        // return <input  onChange={onInputChange} type='textarea'/>

        // can also use arrow functions like
        return ( <div className='search-bar'>
            <input onChange={event => this.props.onSearch(event.target.value) } 
            type = 'input' / >
            </div>
        )
    }
}


// can also be [on /handle][component][event]
// onInputChange(event) {
// 	console.log(event.target.value)
// }







// };


export default SearchBar;
