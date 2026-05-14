import DraggableTask from "./DraggableTask.jsx";
import DroppableColumn from "./DroppableColumn.jsx";
import TaskCard from "./TaskCard";

const Done = ({ tasks, filterTasks, deleteTask }) => {
  return (
    <div className="done">
      <h2>Done</h2>

      <DroppableColumn id="done">
        {filterTasks(tasks).map((task) => (
          <DraggableTask key={task.id} task={task}>
            <TaskCard 
              task={task}
              deleteTask={deleteTask}   // ✅ ADD THIS
            />
          </DraggableTask>
        ))}
      </DroppableColumn>
    </div>
  );
};

export default Done;