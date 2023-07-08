import React from 'react';
import css from './Footer.module.css';
import { useState, useEffect } from 'react';

const Footer = props => {
  const { tasks } = props;

  const [activeTasksCounter, setActiveTasksCounter] = useState(0);
  const [finishedTasksCounter, setFinishedTasksCounter] = useState(0);

  const activeTasks = tasks.filter((task) => task.status === 'backlog');
  const finishedTasks = tasks.filter((task) => task.status === 'finished');

  const countTasks = () => {
    setActiveTasksCounter(activeTasks.length);
    setFinishedTasksCounter(finishedTasks.length);
  }

  useEffect(countTasks, [tasks]);

  return (
    <div className={css.footer}>
      <div className={css.tasksWrapper}>
        <p>Active tasks: {activeTasksCounter} </p>
        <p>Finished tasks: {finishedTasksCounter}</p>
      </div>
      <p>Kanban board by Timofey Bogdanov, 2023</p>
    </div>
  )
}

export default Footer;