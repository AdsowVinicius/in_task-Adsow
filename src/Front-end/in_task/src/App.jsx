import { useEffect, useState } from "react";
import Formulario from "./Formulario"; // Verifique se o nome do arquivo está correto
import Tabela from "./Tabela"; // Verifique se o nome do arquivo está correto
import './app.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null); // Estado para a tarefa selecionada

  const getTasks = async () => {
    try {
      const response = await fetch("http://localhost:8080/tasks", {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Erro ao buscar tarefas');
      }
      const tasksList = await response.json();
      setTasks(tasksList);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const onAddTask = async (taskData) => {
    try {
      const response = await fetch("http://localhost:8080/tasks", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData)
      });
      if (!response.ok) {
        throw new Error('Erro ao adicionar tarefa');
      }
      getTasks(); // Atualiza a lista de tarefas
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
    }
  };

  const onUpdateTask = async (taskData) => {
    try {
      const response = await fetch(`http://localhost:8080/tasks/${taskData.id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData)
      });
      if (!response.ok) {
        throw new Error('Erro ao atualizar tarefa');
      }
      getTasks(); // Atualiza a lista de tarefas
      setSelectedTask(null); // Limpa a seleção após a atualização
    } catch (error) {
      console.error("Erro ao atualizar tarefa:", error);
    }
  };

  const onSelectTask = (task) => {
    setSelectedTask(task); // Define a tarefa selecionada
  };

  return (
    <div>
      <Formulario 
        onAddTask={onAddTask} 
        onUpdateTask={onUpdateTask} 
        selectedTask={selectedTask} // Passa a tarefa selecionada para o formulário
      />
      <Tabela tasks={tasks} onSelectTask={onSelectTask} />
    </div>
  );
}

export default App;
