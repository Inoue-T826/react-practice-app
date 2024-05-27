import './App.css';
import { useState } from 'react';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodos } from './components/CompetetTodos';

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
   const newTodos = [...incompleteTodos];
   newTodos.splice(index, 1);
   setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
   const newTodos = [...incompleteTodos];
   newTodos.splice(index, 1);
   const newCompleteTodos = [...completeTodos, incompleteTodos[index]]
   setIncompleteTodos(newTodos);
   setCompleteTodos(newCompleteTodos);
  }

  const onClickReturn = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
   <>
     <InputTodo 
     todoText={todoText} 
     onChangeTodoText={onChangeTodoText} 
     onClickAdd={onClickAdd}/>

     <IncompleteTodos 
       incompleteTodos={incompleteTodos}
       onClickComplete={onClickComplete}
       onClickDelete={onClickDelete}
     />

     <CompleteTodos
       completeTodos={completeTodos}
       onClickReturn={onClickReturn}
     />
   </>
  );
}