import TaskCard from './TaskCard'
import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskList() {
  const {tareas} =useContext(TaskContext)
  
  if(tareas.length === 0){
    return <h1 className='text-white text-4xl font-bold text-center '>No hay tareas</h1>
  }

  return (
    <div className='grid grid-cols-4 gap-2'>
      {tareas.map((tarea) => (
       <TaskCard key={tarea.id} task={tarea} />
      ))}
    </div>
  );
}

export default TaskList;
