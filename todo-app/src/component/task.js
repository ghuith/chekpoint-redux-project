import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/action';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleToggle = () => dispatch(toggleTask(task.id));
  const handleEdit = () => {
    const newDescription = prompt('Modifier la tâche', task.description);
    if (newDescription) dispatch(editTask(task.id, newDescription));
  };

  return (
    <div>
      <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
        {task.description}
      </span>
      <button onClick={handleToggle}>{task.isDone ? 'Non fait' : 'Fait'}</button>
      <button onClick={handleEdit}>Modifier</button>
    </div>
  );
};

export default Task;
