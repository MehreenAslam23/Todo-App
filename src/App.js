import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todo from './Todo';
function App() {
  const[inputvalue, setInputValue] = useState("")
  const[listItem, setListItem] = useState([])
  const getInput=(e)=>{
    setInputValue(e.target.value)
  }
  const getList=()=>{
    if(inputvalue!==''){
      setListItem((oldItems)=>{
        return [...oldItems,inputvalue] 
       })
    }
    setInputValue("")
  }
  const deleteItem=(id)=>{
    setListItem((oldItems)=>{
      return oldItems.filter((arr,i)=>{
       return i!==id
      })
     })
  }
  return (
    <div className="App">
      <div className='main-div'>
        <br/>
        <h2>ToDo List</h2>
      
        <input className='input-div' type='text' placeholder='Add a todo' onChange={getInput} value={inputvalue}></input>
        <button onClick={getList}>+</button>
        <br/><br/>
        <ol>
          {
            listItem.map((item,i)=>{
              
              return <Todo
               item ={item}
               key = {i}
               id = {i}
               onSelect ={deleteItem}

              > </Todo>
            })
          }
         </ol>
      </div>
    </div>
  );
}

export default App;
