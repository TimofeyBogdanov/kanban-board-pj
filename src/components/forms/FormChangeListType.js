import React from 'react';
import css from './FormChangeListType.module.css';
import { LIST_TYPES } from '../../config';

import { useState } from 'react';

const FormChangeListType = props => {
  const { type, tasks, setTasks, handleClick } = props;
  const [values, setValues] = useState('');

  const handleSelect = (e) => {
    e.preventDefault();
    const updatedTasksList = tasks.map((task) => ({
      ...task,
      status:
        task.title === values && task.status === LIST_TYPES.BACKLOG
          ? LIST_TYPES.READY
          : task.title === values && task.status === LIST_TYPES.READY
            ? LIST_TYPES.IN_PROGRESS
            : task.title === values && task.status === LIST_TYPES.IN_PROGRESS
              ? LIST_TYPES.FINISHED
              : task.status,
    }))
    
    setTasks(updatedTasksList);
    handleClick();
  }

  return (
    <form className={css.form}>
      <select
        className={css.select}
        onClick={(e) => setValues(e.target.value)}>
        <option selected defaultValue={' '} style={{color: 'gray'}}>Select task...</option>
        {tasks.map((task) => {
          if (type === LIST_TYPES.READY) {
            if (task.status === LIST_TYPES.BACKLOG) {
              return <option value={task.title}>{task.title}</option>
            } else return ''
          } else if (type === LIST_TYPES.IN_PROGRESS) {
            if (task.status === LIST_TYPES.READY) {
              return <option>{task.title}</option>
            } else return ''
          } else if (type === LIST_TYPES.FINISHED) {
            if (task.status === LIST_TYPES.IN_PROGRESS) {
              return <option>{task.title}</option>
            } else return ''
          }
        })}
      </select>
      <button className={css.submit} onClick={handleSelect}>
        Submit
      </button>
      <button className={css.cancel} onClick={handleClick}>
        Cancel
      </button>
    </form>
  )
}

export default FormChangeListType;