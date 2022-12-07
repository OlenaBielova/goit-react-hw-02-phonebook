import React from 'react';
import PropTypes from 'prop-types';
import { SearchByName, SearchInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => (
  <SearchByName>
    Find contact by name
    <SearchInput type="text" value={value} onChange={onChange} name="filter" />
  </SearchByName>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func
};