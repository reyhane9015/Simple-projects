// Question:
/** You are building a task management system. You need to define a Task interface to represent tasks in the system.
 Each task should have the following properties:

id: A unique number identifying the task.
title: A string representing the title of the task.
description: A string representing the description of the task.
status: An enum that represents the current state of the task. The possible statuses are:
Pending
InProgress
Completed
assignedTo: A string representing the name of the person assigned to the task. This is optional.
Additionally, implement a generic function that can accept an array of tasks and filter tasks based on their status.

The function should be able to filter tasks by their status. **/




import React, { useEffect } from 'react';


interface Task {
  id: number;
  title: string;
  description: string;
  status: statusEnum;
  assignedTo?: string;
}

enum statusEnum {
  Pending = 'PENDING',
  InProgress = 'IN_PROGRESS',
  Completed = 'COMPLETED',
}


function filterTasksByStatus<T extends Task>(tasks: T[], status: statusEnum): T[] {
  return tasks.filter((task) => task.status === status);
}


const TaskList: React.FC = () => {

  const tasks: Task[] = [
    { id: 1, title: 'Task 1', description: 'Description 1', status: statusEnum.Pending },
    { id: 2, title: 'Task 2', description: 'Description 2', status: statusEnum.InProgress, assignedTo: 'Jane' },
    { id: 3, title: 'Task 3', description: 'Description 3', status: statusEnum.Completed, assignedTo: 'John' },
    { id: 4, title: 'Task 4', description: 'Description 4', status: statusEnum.InProgress, assignedTo: 'Joo' },
  ];

 
  useEffect(() => {
    const inProgressTasks = filterTasksByStatus(tasks, statusEnum.InProgress);
    console.log('InProgress Tasks:', inProgressTasks);
  }, [tasks]);

  return (
    <div>
      <h1>Task List</h1>
      <p>Check the console for filtered tasks!</p>
    </div>
  );
};

export default TaskList;



