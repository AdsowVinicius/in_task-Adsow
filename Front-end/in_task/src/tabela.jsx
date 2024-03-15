function Tabela({vetor}){
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tarefa</th>
                    <th>descrição</th>
                    <th>Status</th>

                </tr>
            </thead>
            <tbody>
                { vetor.map((obj, indice) => (
                                <tr key ={indice}>
                                    <td>{indice+1}</td>
                                    <td>{obj.name_task}</td>
                                    <td>{obj.description}</td>
                                    <td>{obj.status}</td>
                                    <td><button className="btn btn-success">selecionar</button></td>
                                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Tabela;