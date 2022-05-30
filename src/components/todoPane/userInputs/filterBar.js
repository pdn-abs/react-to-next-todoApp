import { React } from 'react';
import FilterButton from './filterButton.js';

const FilterBar = (context) => {
	const { config } = context;

	return	<div role="filterBar" className="filter">
		{config.filters.map((filter) =>
			FilterButton({ ...context, data: filter }))}</div>;
};

export default FilterBar;
