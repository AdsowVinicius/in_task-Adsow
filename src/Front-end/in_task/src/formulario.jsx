
import { useEffect, useState } from "react";

function Formulario({ onAddTask, onUpdateTask, selectedTask }) {
  const [id, setId] = useState('');
  const [nameTask, setNameTask] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('NÃO_INICIADO'); // Padrão

  useEffect(() => {
    if (selectedTask) {
      setId(selectedTask.id);
      setNameTask(selectedTask.name_task);
      setDescription(selectedTask.description);
      setStatus(selectedTask.status);
    } else {
      // Limpa os campos se nenhuma tarefa estiver selecionada
      setId('');
      setNameTask('');
      setDescription('');
      setStatus('NÃO_INICIADO');
    }
  }, [selectedTask]); // Dependência para atualizar os campos quando a tarefa selecionada mudar

  const eventoTeclado = (e) => {
    const { name, value } = e.target;
    if (name === 'id') setId(value);
    else if (name === 'name_task') setNameTask(value);
    else if (name === 'description') setDescription(value);
    else if (name === 'status') setStatus(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      id: id ? Number(id) : undefined,
      name_task: nameTask,
      description,
      status,
    };
    if (id) {
      onUpdateTask(taskData); // Chama a função para atualizar
    } else {
      onAddTask(taskData); // Chama a função para adicionar
    }
    // Limpa os campos
    setId('');
    setNameTask('');
    setDescription('');
    setStatus('NÃO_INICIADO');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='number'
        name='id'
        placeholder='ID da Tarefa'
        value={id}
        onChange={eventoTeclado}
        className='form-control'
      />
      <input
        type='text'
        name='name_task'
        placeholder='Tarefa'
        value={nameTask}
        onChange={eventoTeclado}
        className='form-control'
      />
      <input
        type='text'
        name='description'
        placeholder='Descrição'
        value={description}
        onChange={eventoTeclado}
        className='form-control'
      />
      <select name='status' value={status} onChange={eventoTeclado} className='form-control'>
        <option value='NÃO_INICIADO'>Não Iniciado</option>
        <option value='EM_ANDAMENTO'>Em Andamento</option>
        <option value='CONCLUIDO'>Concluída</option>
      </select>
      <input type='submit' value={id ? "Atualizar" : "Adicionar"} className='btn btn-primary' />
    </form>
  );
}

export default Formulario;

  