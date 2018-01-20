import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      filter: props.currentFilter
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      filter: e.target.value
    });
  }

  render() {
    const { filter } = this.state;
    const { handleFilter } = this.props;

    return (
      <form className='container filter-form'>
        <label>Select a Filter: </label>
        <select value={this.state.filter} onChange={this.handleChange}>
          <option value='all'>All</option>
          <option value='normal'>Normal</option>
          <option value='lark'>Lark</option>
          <option value='reyes'>Reyes</option>
          <option value='valencia'>Valencia</option>
          <option value='inkwell'>Inkwell</option>
          <option value='ludwig'>Ludwig</option>
        </select><br /><br />
        <button type='button' onClick={handleFilter.bind(null, filter)}>Submit</button>
      </form>
    )
  }
}

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired
};


export default Filter;
