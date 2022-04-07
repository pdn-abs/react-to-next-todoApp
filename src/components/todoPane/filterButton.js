/* eslint-disable no-magic-numbers */
import { React } from 'react';

const FilterButton = (context) =>
	context.config.filters.map((filter) =>
		<button
			key={ filter }
			// onClick={ () => context.actions.filterTodos(filter.name) }
		>
			{filter.label}
		</button>);

export default FilterButton;
