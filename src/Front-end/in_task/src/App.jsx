import { useEffect, useState } from "react"
import Formulario from "./formulario"
import Tabela from "./tabela"
import './app.css'


function App() {
  //obj task
  const task = {
    id : 0,
    name_task : '',
    description :'',
    status : ''

  }
  //use state
  const [btnRegister, setBtnRegister] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [objTask, setObjTasks] = useState(task);

  //useEffect
  useEffect(()=>{
    fetch("http://localhost:8080/tasks  ")
    .then(retorno => retorno.json())
    .then(data => {setTasks(data)})
  },[]);
  
  // obtendo dados do formulario
  const aoDigitar = (e) => {
    console.log(e.target);
    setObjTasks({...objTask, [e.target.name]: e.target.value});
  }
  const register = () =>{
    fetch("http://localhost:8080/tasks ",{
      method: 'post',
      body: JSON.springify(objTask),
      headers:{
        'Content-type': 'applincation/json',
        'Accept':'applincation/json'
      }
    })
    .then(retorno=> retorno.json)
    .then(retorno_convertido=> {
      console.log(retorno_convertido);
    })
  }

  return(
    <div>
      <p>{JSON.stringify(objTask)}</p>
      <Formulario botao={btnRegister} eventoTeclado ={aoDigitar} register ={register}/>
      <Tabela vetor = {tasks}/>
    </div>
  )
}

export default App
