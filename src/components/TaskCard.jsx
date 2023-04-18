import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskCard({ task}) {
 
  const {deleteTarea} = useContext(TaskContext)

  return (
   
      <div className='bg-gray-800 text-white p-4 rounded-md'>
        <h1 className='text-x1 font-bold capitalize'> {task.title}</h1>
        <p className='text-gray-500 text-sm'>{task.description}</p>
        <button className='bg-red-500 px-2 py-2 rounded-md mt-4 hover:bg-red-300' onClick={() => deleteTarea(task.id)}>Eliminar Tarea</button>
      </div>
   
  );
}

export default TaskCard;
