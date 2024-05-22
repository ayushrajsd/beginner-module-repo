import {useSelector, useDispatch} from 'react-redux';
import {addTask, setValue} from "../redux/todoSlice"

function TodoRedux() {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setValue(e.target.value));
  }
  const {value, todoList} = useSelector((state) => state.todo);

    const handleAdd = () => {
        dispatch(addTask(value));
    }
  return (
    <>
      <h2>Todo</h2>
      <div>
        <div className="inputBox">
          <input className='border border-gray-400' onChange={handleChange} type="text" value={value}/>
          <button onClick={handleAdd}>Add Task</button>
        </div>
        <div className="list">
          <ul>
            {todoList.map((task, idx) => {
              return <li key={idx}>{task}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TodoRedux;
