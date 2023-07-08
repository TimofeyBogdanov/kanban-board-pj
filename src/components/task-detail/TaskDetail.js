import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import closeIcon from '../../assets/images/close-task-detail-icon.png';
import css from './TaskDetail.module.css';

const TaskDetail = ({ tasks, setTasks }) => {
  const { taskId } = useParams();
  const task = tasks.find((task) => task.id === taskId);
  const [descriptionValue, setDescriptionValue] = useState(task.description);
  const [isInputVisible, setInputVisible] = useState(false);

  const changeDescription = (e) => {
    e.preventDefault();
    const updatedTasks = tasks.map((task) => ({
      ...task,
      description: task.id === taskId ? descriptionValue : task.description,
    }));

    setTasks(updatedTasks);
    handleInput();
  }

  const handleInput = () => {
    setInputVisible(!isInputVisible);
  }

  const cancelInput = (e) => {
    e.preventDefault();
    handleInput();
    setDescriptionValue(task.description);
  }

  return (
    <div className={css.detailWrapper}>
      <div className={css.header}>
        <h1 className={css.title}>{task.title}</h1>
        <Link to={`/`}>
          <button className={css.closeButton}>
            <img src={closeIcon} alt="close task detail icon"></img>
          </button>
        </Link>
      </div>
      <p className={isInputVisible ? css.hide : css.description}>
        {task.description || ' This task has no description '}
      </p>
      <form className={isInputVisible ? css.descriptionForm : css.hide}>
        <textarea
          placeholder='Enter description...'
          onChange={(e) => setDescriptionValue(e.target.value)}
          type="text"
          className={css.descriptionInput}
          value={descriptionValue || ''}
        ></textarea>
        <div className={css.buttonWrapper}>
          <button className={css.saveButton} onClick={changeDescription}>
            Save
          </button>
          <button className={css.cancelButton} onClick={cancelInput}>
            Cancel
          </button>
        </div>
      </form>
      <button
        onClick={handleInput}
        className={isInputVisible ? css.hide : css.changeButton}
      >
        Change description
      </button>
    </div>
  )
}

export default TaskDetail;