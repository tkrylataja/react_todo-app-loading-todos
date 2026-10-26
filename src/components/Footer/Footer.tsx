import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { FiltersList } from '../../types/FiltersList';

type Props = {
  todoList: Todo[];
  itemsLeft: number;
  filter: FiltersList;
  setFilter: (value: FiltersList) => void;
};
export const Footer: React.FC<Props> = ({
  todoList,
  itemsLeft,
  filter,
  setFilter,
}) => {
  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {itemsLeft} items left
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          className={classNames('filter__link', {
            selected: filter === FiltersList.all,
          })}
          data-cy="FilterLinkAll"
          onClick={() => setFilter(FiltersList.all)}
        >
          All
        </a>

        <a
          href="#/active"
          className={classNames('filter__link', {
            selected: filter === FiltersList.active,
          })}
          data-cy="FilterLinkActive"
          onClick={() => setFilter(FiltersList.active)}
        >
          Active
        </a>

        <a
          href="#/completed"
          className={classNames('filter__link', {
            selected: filter === FiltersList.completed,
          })}
          data-cy="FilterLinkCompleted"
          onClick={() => setFilter(FiltersList.completed)}
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        disabled={!todoList.some(todo => todo.completed)}
      >
        Clear completed
      </button>
    </footer>
  );
};
