import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LIST_TYPES } from '../../config';
import FormAddNewTask from '../forms/FormAddNewTask';
import FormChangeListType from '../forms/FormChangeListType';
import css from './List.module.css';
import uniqid from 'uniqid';
import addCardButtonIcon from '../../assets/images/add-card-button-icon.png';

const List = props => {
  const { localTasks, title, type, tasks, addNewTask } = props;
  const [isFormVisible, setFormVisible] = useState(false);

  const handleClick = () => {
    setFormVisible(!isFormVisible)
  }

  const backlogTasks = tasks.filter((task) => task.status === LIST_TYPES.BACKLOG);
  const readyTasks = tasks.filter((task) => task.status === LIST_TYPES.READY);
  const inProgressTasks = tasks.filter((task) => task.status === LIST_TYPES.IN_PROGRESS);

  return (
    <div className={css.list}>
      <p className={css.listTitle}>{title}</p>
      <div className={css.tasksWrapper}>
        {localTasks.map((task) => {
          return (
            <Link to={`/tasks/${task.id}`} className={css.taskLink}>
              <p className={css.task} key={task.id}>
                {task.title}
              </p>
            </Link>
          )
        })}
        {type === LIST_TYPES.BACKLOG && isFormVisible && (
          <FormAddNewTask
            key={uniqid}
            addNewTask={addNewTask}
            setFormVisible={setFormVisible}
          />
        )}
        {type !== LIST_TYPES.BACKLOG && isFormVisible && (
          <FormChangeListType
            {...props}
            key={uniqid}
            setFormVisible={setFormVisible}
            handleClick={handleClick}
          />
        )}

        {type === LIST_TYPES.BACKLOG && !isFormVisible && (
          <div className={css.buttonWrapper}>
            <button className={css.addCardButton} onClick={handleClick}>
              <img src={addCardButtonIcon} alt="add card button icon"></img>
              <span>Add Card</span>
            </button>
          </div>
        )}
        {type === LIST_TYPES.READY && !isFormVisible && (
          <div className={css.buttonWrapper}>
            <button
              disabled={backlogTasks.length > 0 ? false : true}
              className={
                backlogTasks.length > 0
                  ? css.addCardButton
                  : css.addCardButtonDisabled
              }
              onClick={handleClick}
            >
              <img src={addCardButtonIcon} alt="add card button icon"></img>
              <span>Add Card</span>
            </button>
          </div>
        )}
        {type === LIST_TYPES.IN_PROGRESS && !isFormVisible && (
          <div className={css.buttonWrapper}>
            <button
              disabled={readyTasks.length > 0 ? false : true}
              className={
                readyTasks.length > 0
                  ? css.addCardButton
                  : css.addCardButtonDisabled
              }
              onClick={handleClick}
            >
              <img src={addCardButtonIcon} alt="add card button icon"></img>
              <span>Add Card</span>
            </button>
          </div>
        )}
        {type === LIST_TYPES.FINISHED && !isFormVisible && (
          <div className={css.buttonWrapper}>
            <button
              disabled={inProgressTasks.length > 0 ? false : true}
              className={
                inProgressTasks.length > 0
                  ? css.addCardButton
                  : css.addCardButtonDisabled
              }
              onClick={handleClick}
            >
              <img src={addCardButtonIcon} alt="add card button icon"></img>
              <span>Add Card</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default List;