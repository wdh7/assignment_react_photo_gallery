import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './elements/Button';

class InputSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({
      search: e.target.value
    });
  }

  render() {
    const { search } = this.state;
    const { handleFilter, id } = this.props;

    return (
      <form className='container filter-form'>
        <label>Search by Username or Hashtag: </label>
        <input type='text' placeholder='Enter username or hashtag' onChange={this.handleInput} />
        <Button label='Search' action={handleFilter} search={search} id={id}/>
      </form>
    )
  }
}


export default InputSearch;
