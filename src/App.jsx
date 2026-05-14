import { useState, useEffect } from "react";
import { DndContext } from "@dnd-kit/core"; 
import ToDo from "./components/Todo.jsx"; 
import Progress from "./components/progress.jsx"; 
import Done from "./components/Done.jsx"; 
const App = () => { 
    const [input, setInput] = useState(""); 
    const [priority, setPriority] = useState("low"); 
    const [search, setSearch] = useState(""); 
    const [tasks, setTasks] = useState(() => { 
    const saved = localStorage.getItem("tasks"); 
     return saved ? JSON.parse(saved) : { todo: [], inProgress: [], done: [] }; });
        useEffect(() => { 
            localStorage.setItem("tasks", JSON.stringify(tasks)); }, [tasks]); 
        // ADD TASK 
       const addTask = () => {
         if (!input.trim()) 
            return; 
        const newTask = {
             id: Date.now(), 
             text: input,
             priority, isEditing: false
          }; 
        setTasks({ ...tasks, todo: [...tasks.todo, newTask] 

        });
        setInput(""); 
    }; 
    // DELETE 
    const deleteTask = (id) => { 
        setTasks({ todo: tasks.todo.filter((t) => t.id !== id), 
        inProgress: tasks.inProgress.filter((t) => t.id !== id),
        done: tasks.done.filter((t) => t.id !== id) }); }; 
    // EDIT 
    const toggleEdit = (id) => { 
        setTasks({ ...tasks, todo: tasks.todo.map((t) => t.id === id ? 
            { ...t, isEditing: !t.isEditing } : t ) 
        }); 
    }; 
    const updateTask = (id, text) => {
         setTasks({ ...tasks, todo: tasks.todo.map((t) => t.id === id ?
         { ...t, text } : t ) 
        }); 
    }; 
    // FILTER 
    const filterTasks = (list) => list.filter((t) => t.text.toLowerCase().includes(search.toLowerCase())
     ); 
     // DRAG LOGIC 
    const handleDragEnd = (e) => { 
        const { active, over } = e; 
        if (!over) return; 
        const id = active.id; 
        const target = over.id; 
        let moved = null; 
        const newTasks = { todo: tasks.todo.filter((t) => {
             if (t.id === id) 
                { moved = t; 
                    return false;
                } return true;
             }), 
             inProgress: tasks.inProgress.filter((t) => {
                 if (t.id === id) 
                    { moved = t; 
                        return false; 
                    } return true; 
                }), 
                done: tasks.done.filter((t) => {
                    if (t.id === id) 
                        { moved = t; 
                            return false; 
                        } return true; 
                    }) 
                }; 
                if (moved) newTasks[target].push(moved); setTasks(newTasks); 
            }; 
            const moveToDone = (task) => { 
                setTasks({ ...tasks, inProgress: tasks.inProgress.filter((t) =>
                     t.id !== task.id),
                      done: [...tasks.done, task] }); }; 
                      const moveToProgress = (task) => {
                        setTasks({ ...tasks, todo: tasks.todo.filter((t) =>
                             t.id !== task.id), inProgress: [...tasks.inProgress, task] 
                            }); 
                        }; 
                        return ( 
                        <DndContext onDragEnd={handleDragEnd}> 
                        <div className="task-manager"> 
                            <div className="head"> 
                                <h1 className="typing">Kanban Task Manager</h1> 
                                <p>From To-Do to Done — manage your workflow seamlessly.</p> 
                                </div> <section className="input-section"> 
                                    <input value={input} onChange={(e) => 
                                    setInput(e.target.value)}placeholder="Enter task"/>
                                    <select value={priority} onChange={(e) => 
                                    setPriority(e.target.value)}> 
                                    <option value="low">Low</option> 
                                    <option value="medium">Medium</option> 
                                    <option value="high">High</option> 
                                    </select> 
                                    <button onClick={addTask}>Add</button> 
                                    <input placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}/>
                                    </section> 
                                    <div className="columns">

                                         <ToDo tasks={tasks.todo} 
                                         filterTasks={filterTasks} 
                                         toggleEdit={toggleEdit} 
                                         updateTask={updateTask} 
                                         deleteTask={deleteTask} 
                                         moveToProgress={moveToProgress} /> 

                                         <Progress tasks={tasks.inProgress} 
                                         filterTasks={filterTasks} 
                                         moveToDone={moveToDone} 
                                         deleteTask={deleteTask} />

                                         <Done tasks={tasks.done} 
                                         filterTasks={filterTasks} /> 

                                         </div> 
                                         </div> 
                                         </DndContext> 
                                         ); 
};
export default App;