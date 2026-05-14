import { useDraggable } from "@dnd-kit/core";

const DraggableTask = ({ task, children }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: task.id
  });

  return (
    <div ref={setNodeRef}>
      <div {...listeners} {...attributes} style={{ cursor: "grab" }}>
        ☰
      </div>

      {/* ✅ actual content */}
      {children}
    </div>
  );
};

export default DraggableTask;