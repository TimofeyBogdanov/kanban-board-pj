import React from 'react';
import css from './Board.module.css';
import List from '../list/List';
import uniqid from 'uniqid';

import { LIST_TYPES, LIST_COPY } from '../../config.js';

const Board = props => {
  const { tasks, setTasks } = props;

  const addNewTask = (title) => {
    const newTask = {
      id: uniqid(),
      title: title,
      description: null,
      status: LIST_TYPES.BACKLOG
    }

    setTasks([...tasks, newTask])
  }

  return (
    <div className={css.board}>
      {Object.values(LIST_TYPES).map((type) => {
        const listTasks = tasks.filter((task) => task.status === type)
        return (
          <List
            key={uniqid}
            type={type}
            title={LIST_COPY[type]}
            tasks={tasks}
            localTasks={listTasks}
            addNewTask={addNewTask}
            setTasks={setTasks}
          />
        )
      })}
    </div>
  )
}

export default Board;