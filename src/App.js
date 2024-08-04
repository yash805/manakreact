
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchTodo } from './thunk/slice/Todo';

function App() {
       const state = useSelector(state=> state)
       console.log("state",state)
       const dispatch = useDispatch()

       if(state.todo.Loading){
        return <h1>Loading...</h1>
       }
    return (
   
    <div className="App">
      
      <button onClick={()=> dispatch(fetchTodo())}>fetch</button>
      {
        state.todo.data && state.todo.data.map((e)=> (
        <li>{e.title}</li>
      ))
      }
    </div>  
   
  );
}

export default App;
