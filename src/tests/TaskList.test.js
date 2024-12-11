"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
require("@testing-library/jest-dom");
const TaskList_1 = __importDefault(require("../components/TaskList"));
jest.mock('../components/TaskItem', () => {
    return ({ task, toggleTaskCompletion }) => (react_1.default.createElement("div", { onClick: () => toggleTaskCompletion(task.id), "data-testid": `task-item-${task.id}` },
        task.text,
        " - ",
        task.completed ? 'Completed' : 'Active'));
});
describe('TaskList', () => {
    const mockToggleTaskCompletion = jest.fn();
    beforeEach(() => {
        (0, react_2.render)(react_1.default.createElement(TaskList_1.default, { tasks: [
                { id: 1, text: 'Test Task 1', completed: false },
                { id: 2, text: 'Test Task 2', completed: true },
            ], toggleTaskCompletion: mockToggleTaskCompletion }));
    });
    test('renders correctly', () => {
        expect(react_2.screen.getByText(/test task 1/i)).toBeInTheDocument();
        expect(react_2.screen.getByText(/test task 2/i)).toBeInTheDocument();
    });
    test('calls toggleTaskCompletion when a task item is clicked', () => {
        const taskItem1 = react_2.screen.getByTestId('task-item-1');
        react_2.fireEvent.click(taskItem1);
        expect(mockToggleTaskCompletion).toHaveBeenCalledWith(1);
        const taskItem2 = react_2.screen.getByTestId('task-item-2');
        react_2.fireEvent.click(taskItem2);
        expect(mockToggleTaskCompletion).toHaveBeenCalledWith(2);
    });
});
