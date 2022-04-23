import addButton from './addButton.js';
import editButton from './editButton.js';

const actionButton = (context) => (context.state.editing
	? editButton(context)
	: addButton(context));

export default actionButton;
