// Question

/** You are building a Todo List application. The application has the following requirements:

Todo Item:
Each todo item has the following properties:
id: A unique identifier (number).
title: The title or description of the todo item (string).
completed: A boolean that tells whether the todo is completed or not.
Todo List:

Implement a function that will allow you to add a new todo item to the todo list.
The function should take a Todo object, add it to the list, and return the updated list. */



import React, { useState , useEffect } from 'react';




interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

function filteredTodos<T extends Todo>(todos: T[], completed: boolean) : T[] {
  return todos.filter((todo) => todo.completed === completed);
}

function addTodo<T extends Todo>(todos: T[] , newTodo: T): T[] {
      return [...todos , newTodo];
}


const TodoList: React.FC = () => {


    const [todos , setTodos] = useState<Todo[]> ([
        {id: 1 , title: "todo 1" , completed: true},
        {id: 2 , title: "todo 2" , completed: true},
        {id: 3 , title: "todo 3" , completed: false},
    ]);

    
    useEffect(() => {
        const filtered = filteredTodos(todos, true);

        console.log('Completed Todos:', filtered);

        console.log('All Todos:', todos);

    }, [todos]);



    const handleAddTodo = () => {

        const newId = todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;

        const newTodo: Todo = {
            id: newId,
            title: "New Todo",
            completed: false,
        }

        setTodos((prev) => addTodo(prev, newTodo));
    }

      

      return (
        <div>
          <h1>Todos List</h1>
          <p>Check the console for filtered todos!</p>


          <button onClick={handleAddTodo}>Add New Todo</button>

          {todos.map((todo) => 
            <div key={todo.id}>{todo.title}</div>
          )}

        </div>
      );
}


export default TodoList;


