import { React } from 'react';
import FilterButton from './filterButton.js';

const FilterBar = (context) => {
	const { config } = context;

	return	<div>{config.filters.map(FilterButton)}</div>;
};

export default FilterBar;
