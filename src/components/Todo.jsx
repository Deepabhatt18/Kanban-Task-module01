import DraggableTask from "./DraggableTask.jsx";
import DroppableColumn from "./DroppableColumn.jsx"; 
import TaskCard from "./TaskCard"; 
const ToDo = ({ tasks, filterTasks, toggleEdit, updateTask, deleteTask, moveToProgress }) => { 
    return (
        <div className="todo">
         <h2>To Do</h2>
         <DroppableColumn id="todo">
         {filterTasks(tasks).map((task) => ( 
            <DraggableTask key={task.id} task={task}> 
            <TaskCard task={task} 
            toggleEdit={toggleEdit} 
            updateTask={updateTask} 
            deleteTask={deleteTask} 
            moveToProgress={moveToProgress} /> 
            </DraggableTask> 
        ))} </DroppableColumn> 
        </div> 
   );
 }; 
export default ToDo;