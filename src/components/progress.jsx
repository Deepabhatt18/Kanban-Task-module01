import DraggableTask from "./DraggableTask.jsx";
import DroppableColumn from "./DroppableColumn.jsx"; 
import TaskCard from "./TaskCard.jsx";
const Progress = ({ tasks, filterTasks,moveToDone, deleteTask }) => {
    return ( <div className="progress">
         <h2>In Progress</h2>
         <DroppableColumn id="inProgress">
            {filterTasks(tasks).map((task) => (
             <DraggableTask key={task.id} task={task}>
                <TaskCard task={task}
                 moveToDone={moveToDone}
                 deleteTask={deleteTask}
    />      </DraggableTask> ))} 
    </DroppableColumn>
     </div> ); 
};
     
export default Progress;