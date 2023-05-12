import PropTypes from 'prop-types';
import React from 'react';
import { Input, Text, FilterContainer } from './Filter.styled';
export function Filter({ handleChange, value }) {
  return (
    <FilterContainer>
      <Text>Find contacts by name</Text>
      <Input type="text" value={value} onChange={handleChange} name="filter" />
    </FilterContainer>
  );
}
Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
