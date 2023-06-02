import React from 'react';
import ToDo from './ToDo';
import Button from '@mui/material/Button';


const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
   return (
      <div>
         {toDoList.map(todo => {
            return (
               <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
            )
         })}
         <Button variant="contained" color="error" size='medium' style={{margin: '20px'}} onClick={handleFilter}>Clear Completed Tasks</Button>
      </div>
   );
};

export default ToDoList;