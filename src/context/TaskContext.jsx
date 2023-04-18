import { createContext, useState,useEffect } from "react";
import { tareas as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tareas, settareas] = useState([]);

  function addTarea(tarea) {
    settareas([
      ...tareas,
      {
        title: tarea.title,
        id: tareas.length,
        description: tarea.description,
      },
    ]);
  }

  function deleteTarea(tareaID) {
    settareas(tareas.filter((tarea) => tarea.id !== tareaID));
  }

  useEffect(() => {
    settareas(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tareas,
        deleteTarea,
        addTarea,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
