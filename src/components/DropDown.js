import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './elements/Button';

class DropDown extends Component {
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
    const { handleFilter, id } = this.props;

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
        </select>
        <Button label='Filter' action={handleFilter} search={filter} id={id} />
      </form>
    )
  }
}

DropDown.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired
};


export default DropDown;
