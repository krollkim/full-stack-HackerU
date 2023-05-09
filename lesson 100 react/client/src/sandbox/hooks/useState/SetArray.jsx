
import { Box } from '@mui/system';
import React, {useState} from 'react'

const SetArray = () => {
    const INITIAL_TODO = { todo: ""};
    const [task, setTask] = useState(INITIAL_TODO);
    const [tasks, setTasks] = useState([]);
    const createNewTask = e => {
        e.preventDefault();
        setTasks([...tasks, task]);
        return setTask(INITIAL_TODO);
    };
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', mt: 10, textAlign: 'center'}}>
            <Box sx={{border: 1, maxWidth: 300}}>
                <form>
                    <h5>
                        Task:
                        <span>{task.todo}</span>
                    </h5>

                    <div>
                        <button
                        disabled={!task.todo}
                        onClick={createNewTask}>
                            Create
                        </button>
                        <input type="text" 
                        onChange={e => setTask({...task, todo: e.target.value})}
                        value={task.todo}
                        className="form-control"/>
                    </div>
                </form>

                <ul>
                    {tasks.map((todo, index) => (
                        <li key={index}>
                            {index + 1}. {todo.todo}
                        </li>
                    ))}
                </ul>
            </Box>
        </Box>
    );
};

export default SetArray