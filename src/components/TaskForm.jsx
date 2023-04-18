import {useState,useContext} from 'react'
import {TaskContext} from '../context/TaskContext'


function TaskForm() {
  
   const [title, settitle] = useState("")
   const [description, setdescripcion] = useState("")

   const {addTarea} = useContext(TaskContext)
   
   
   const handleSubmit =(e) =>{
     e.preventDefault() /* Evitar reinciar la pagina */
  
     addTarea({
      title,
      description
     });
     settitle('')
     setdescripcion('')
   }
  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
      <h1 className='text-3xl font-bold text-white
      m-3' >Crea tu tarea</h1>
      <input   placeholder="Agrega tu tarea" 
      onChange={(e)=> settitle(e.target.value)}
      value={title} autoFocus className='bg-slate-300 p-3 w-full mb-2'/>

      <textarea placeholder="Descripcion de la tarea" onChange={(e)=> setdescripcion(e.target.value)} value={description} autoFocus className='bg-slate-300 p-3 w-full mb-2'  ></textarea>
      <button className='bg-indigo-500 px-3 py-1 text-white '  >Guardar</button>
    </form>
    </div>
  );
}
   
export default TaskForm;
