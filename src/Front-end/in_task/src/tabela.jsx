function Tabela({ tasks, onSelectTask }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Tarefa</th>
          <th>Descrição</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.name_task}</td>
            <td>{task.description}</td>
            <td>{task.status}</td>
            <td>
              <button className="btn btn-success" onClick={() => onSelectTask(task)}>
                Selecionar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Tabela;
