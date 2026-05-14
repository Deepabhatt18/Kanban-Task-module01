const TaskCard = ({ task, toggleEdit, updateTask, deleteTask ,moveToDone ,moveToProgress}) => {
  return (
    <div className={`task ${task.priority}`}>
      {task.isEditing ? (
        <input value={task.text} onChange={(e) =>
            updateTask(task.id, e.target.value)
          }
          onBlur={() => toggleEdit && toggleEdit(task.id)}
        />) : (
        <p onClick={() => toggleEdit && toggleEdit(task.id)}>
          {task.text}
        </p>
      )}
      {moveToProgress && (
        <button onClick={() => moveToProgress(task)}>➡️</button>
      )}
      {moveToDone && (
       <button onClick={() => moveToDone(task)}>✔️</button>
      )}
      {deleteTask && (
        <span onClick={() => deleteTask(task.id)}>❌</span>
      )}
      <span>{task.priority}</span>

    </div>
  );
};

export default TaskCard;