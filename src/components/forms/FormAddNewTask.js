import React, { useState } from 'react';
import css from './FormAddNewTask.module.css';

const FormAddNewTask = props => {
  const { addNewTask, setFormVisible } = props;
  const [values, setValues] = useState({ title: '' });

  const handleChange = (e) => {
    const fieldName = e.target.name;
    setValues({ ...values, [fieldName]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.title) {
      addNewTask(values.title);
    }
    setFormVisible(false);
  }

  const handleForm = () => {
    setFormVisible(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={css.form}>
        <input className={css.input}
          id="taskTitle"
          name="title"
          type="text"
          placeholder='Enter task title...'
          value={values.title}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <button className={css.submit} type="submit">
          Submit
        </button>
        <button className={css.cancel} onClick={handleForm}>
          Cancel
        </button>
      </div>
    </form>
  )
}

export default FormAddNewTask;