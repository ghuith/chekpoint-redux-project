import React from 'react';
import { useSelector } from 'react-redux';
import Task from './task';

const ListTask = () => {
  const { tasks, filter } = useSelector((state) => state);
  const filteredTasks = filter === 'all'
    ? tasks
    : tasks.filter((task) => task.isDone === (filter === 'done'));

  return (
    <div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
