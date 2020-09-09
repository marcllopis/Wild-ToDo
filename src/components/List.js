import React from 'react';


const List = props => (
  <>
    {
      props.listArray.map((todo, index) =>
        <p key={index}>- You have to: {todo.todo} <span className='category'>{todo.category}</span> <button id={index} onClick={props.deleteToDo}>Done!</button></p>
      )
    }
  </>

);

export default List;