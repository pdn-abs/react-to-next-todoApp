import TodoManager from './todoManager.js';
import * as random from '@laufire/utils/random';
import { range } from '@laufire/utils/collection';
import { rndBetween } from '@laufire/utils/lib';

describe('todoManager', () => {
	const { addTodo, toggleTodo, toggleTodoList,
		hasNoTodos, isAllChecked, hasCompletedTodo, hasInput,
		filters, filterTodos, editTodo, removeTodo,
		clearCompleted, addTaskToTodo } = TodoManager;
	const id = Symbol('id');
	const todo = Symbol('todo');
	const completed = Symbol('completed');
	const isCompleted = [true, false];
	const min = 2;
	const max = 10;
	const todoList = range(1, rndBetween(min, max)).map((i) =>
		({
			id: Symbol(i),
			completed: random.rndValue(isCompleted),
		}));

	test('add Todo - adds the given todo', () => {
		const context = {
			state: { todoList: [
				{ id, todo, completed },
			],
			input: Symbol('input') },
			config: { idLength: Symbol('idLength') },

		};

		jest.spyOn(random, 'rndString').mockReturnValue(id);

		const result = addTodo(context);

		expect(random.rndString)
			.toHaveBeenCalledWith(context.config.idLength);

		expect(result).toEqual([
			{ id, todo, completed },
			{ id: id,
				todo: context.state.input,
				completed: false },
		]);
	});
	describe('toggle Todo', () => {
		test('toggle Todo - data selected from todoList', () => {
			const data = random.rndValue(todoList);

			const context = {
				state: { todoList },
				data: data,
			};

			const result = toggleTodo(context);

			const toggledTodo = result
				.filter((ele) => ele.id === data.id) ;

			expect(toggledTodo[0].completed).toEqual(!data.completed);
		});
		test('toggle Todo - data out of todoList', () => {
			const 	data = { id };
			const context = {
				state: { todoList },
				data: data,

			};
			const result = toggleTodo(context);

			expect(result).toEqual(todoList);
		});
	});
	describe('toggle TodoList', () => {
		test('toggle TodoList', () => {
			const data = random.rndValue(isCompleted);
			const context = {
				state: { todoList },
				data: data,

			};
			const result = toggleTodoList(context);

			const output = result.filter((ele) => ele.completed === data);

			expect(output.length).toEqual(todoList.length);
		});
	});
	describe('has No Todos', () => {
		test('has No Todos - TodoList Empty', () => {
			const context = {
				state: { todoList: [] },
			};
			const result = hasNoTodos(context);

			expect(result).toEqual(true);
		});
		test('has No Todos - TodoList has todos', () => {
			const context = {
				state: { todoList },

			};
			const result = hasNoTodos(context);

			expect(result).toEqual(false);
		});
	});
	describe('is All Checked ', () => {
		test('is All Checked - All Todos Selected', () => {
			const todos = range(0, rndBetween())
				.map((i) => ({ id: Symbol(i), completed: true }));
			const context = {
				state: { todoList: todos },
			};
			const result = isAllChecked(context);

			expect(result).toEqual(true);
		});
		test('is All Checked - Not All Todos Selected', () => {
			const context = {
				state: { todoList },

			};
			const result = isAllChecked(context);

			expect(result).toEqual(false);
		});
	});
	describe('has Completed Todos ', () => {
		test('has Completed Todos - One Todo Selected', () => {
			const context = { state: { todoList: [{ completed: true },
				{ completed: false }] }};
			const result = hasCompletedTodo(context);

			expect(result).toEqual(true);
		});
		test('has Completed Todos - None of the Todos Selected', () => {
			const context = {
				state: { todoList: [{ completed: false },
					{ completed: false }] },

			};
			const result = hasCompletedTodo(context);

			expect(result).toEqual(false);
		});
	});
	describe('hasInput', () => {
		test('hasInput - Input has no value', () => {
			const context = {
				state: { input: '' },
			};
			const result = hasInput(context);

			expect(result).toEqual(true);
		});
		test('hasInput - Input contains value', () => {
			const context = {
				state: { input: Symbol('input') },

			};
			const result = hasInput(context);

			expect(result).toEqual(false);
		});
	});
	describe('filters', () => {
		test.each([
			['all', '', true],
			['active', { completed: false }, true],
			['completed', { completed: true }, true],
		])('filters', (
			fn, todos, expected
		) => {
			expect(filters[fn](todos)).toBe(expected);
		});
	});
	describe('filter Todos', () => {
		test('filter Todos ', () => {
			const filterTypes = ['all', 'active', 'completed'];
			const filter = random.rndValue(filterTypes);
			const getFilter = Symbol('getFilter');
			const state = {
				todoList: {
					filter: jest.fn().mockReturnValue(getFilter),
				},
				filter: filter,
			};
			const expectation = getFilter;

			jest.spyOn(TodoManager.filters, filter)
				.mockReturnValue();

			const result = filterTodos({ state });

			expect(state.todoList.filter)
				.toHaveBeenCalledWith(TodoManager.filters[filter]);
			expect(result).toEqual(expectation);
		});
	});
	describe('edit todo', () => {
		const todos = range(1, rndBetween(min, max)).map((i) =>
			({
				id: Symbol(i),
				todo: Symbol('todo'),
				completed: random.rndValue(isCompleted),
			}));

		test('edit Todo - editing todo is from todoList ', () => {
			const editing = random.rndValue(todos);
			const input = Symbol('input');
			const context = {
				state: { todoList: todos,
					editing: editing,
					input: input },
			};
			const result = editTodo(context);
			const editedTodo = result.find((ele) => ele.todo === input);

			expect(editedTodo.id).toEqual(editing.id);
		});
		test('edit Todo - editing todo is out of todoList', () => {
			const editing = { id, todo, completed };
			const input = Symbol('input');
			const context = {
				state: { todoList: todos,
					editing: editing,
					input: input },
			};
			const result = editTodo(context);

			expect(result).toEqual(todos);
		});
	});
	describe('remove Todo ', () => {
		test('remove Todo - data selected from todoList', () => {
			const data = random.rndValue(todoList);
			const context = {
				data: data,
				state: { todoList },

			};
			const result = removeTodo(context);
			const expectation = todoList.length - 1;

			expect(result.length).toEqual(expectation);
		});
		test('remove Todo - data out of todoList', () => {
			const data = { id, todo, completed };
			const context = {
				data: data,
				state: { todoList },

			};
			const result = removeTodo(context);

			expect(result).toEqual(todoList);
		});
	});
	test('clear Completed Todos', () => {
		const context = {
			state: { todoList },
		};
		const result = clearCompleted(context);
		const output = result.includes((ele) => ele.completed === true);

		expect(output).toEqual(false);
	});
	test('addTaskToTodo - adds the selected task to todoList', () => {
		const data = { id, todo };
		const context = {
			state: { todoList },
			data: data,

		};
		const result = addTaskToTodo(context);
		const expectation = todoList.concat({ ...data, completed: false });

		expect(result).toEqual(expectation);
	});
});
