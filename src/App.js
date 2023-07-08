import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

import { useState, useEffect } from 'react';

function App() {
  const initialState = JSON.parse(window.localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Main tasks={tasks} setTasks={setTasks} />
        <Footer tasks={tasks} />
      </div>
    </Router>
  )
}

export default App;
