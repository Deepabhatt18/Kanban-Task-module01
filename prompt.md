# 🧠 AI Prompts & Learning Journey

During the development of this Kanban Task Manager, I faced several challenges and used AI assistance to solve them.

---

## 🔹 Problems I Faced

---

### 1. Task Moving Logic

* Tasks were duplicating in multiple columns
* Fixed by removing task from source array before adding to target array

---

### 2. Drag & Drop Integration

* Confusion in using dnd-kit
* Learned about `DndContext`, `useDraggable`, `useDroppable`
* Implemented drag logic using `active` and `over`

---

### 3. Props Handling Errors

* Faced errors due to missing props (moveToDone, deleteTask)
* Fixed by properly passing props from App.jsx → child components

---

### 4. Inline Editing

* Difficulty toggling between text and input
* Solved using `isEditing` state

---

### 5. localStorage Persistence

* Learned how to store and retrieve data using `useEffect`

---

### 6. Search Filtering Issue

* Tasks were showing in all columns
* Fixed by filtering correct task arrays separately

---

## 🔹 Key Learnings

* React state management
* Component-based architecture
* Event handling
* Debugging real-world UI bugs


---

## 🔹 Conclusion

This project helped me move from beginner to intermediate level in React by building a real-world application with advanced features.
